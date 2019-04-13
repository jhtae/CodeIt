class Api::NotesController < ApplicationController
  def index
    @notes = Note.where(user_id: params[:user_id]).order(updated_at: :desc)
    render :index
  end
  
  def show
    @note = Note.find(params[:id])
  end
  
  def create
      ActiveRecord::Base.transaction do
        begin
        @note = Note.create!(note_params.except(:tags))
        tags = params[:note][:tags]
        if tags.count > 0
          tags.each do |tag_name|
            tag = Tag.find_by(name: tag_name)
            if !tag
              tag = Tag.create!(name: tag_name)
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
    )
  end
end