class Api::NotesController < ApplicationController
  def index
    tag_filters = filter_by_tag
    user_filters = filter_by_user
    if tag_filters
      @notes = Note.joins(:tags)
        .where(tags: {name: tag_filters}).group(:id)
        .having("count(notes.id)=?", tag_filters.count)
    elsif user_filters
      @notes = @notes ?
        @notes.where(user_id: params[:user_id]).order(updated_at: :desc) :
        Note.where(user_id: params[:user_id]).order(updated_at: :desc)
    else
      @notes = Note.all
    end
    render :index
  end
  
  def show
    @note = Note.find(params[:id])
  end
  
  def create
    ActiveRecord::Base.transaction do
      begin
        @note = Note.create!(note_params.except(:tags))
        tags = tag_params[:tags]
        if tags.count > 0
          tags.each do |tag_p|
            tag = Tag.find_by(name: tag_p[:name])
            if !tag
              tag = Tag.create!(name: tag_p[:name])
            end
            NoteTag.create!(note: @note, tag: tag)
          end
        end
      rescue => exception
        byebug
        return render json: @note.errors.full_messages, status: 422
      end
    end
    render :show
  end

  private
  def note_params
    params.require(:note).permit(
      :user_id,
      :notebook_id,
      :description,
      :note,
      :tags
    )
  end
  def tag_params
    params.require(:note).permit(tags: [:id, :name])
  end

  def filter_by_tag
    params[:tags]
  end
  def filter_by_user
    params[:user_id]
  end
end