class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
    render :index
  end
  
  def show
    @tag = Tag.find(params[:id])
  end
  
  def create
    begin
      @tag = Tag.create(tag_params)
    rescue => exception
      render json: @tag.errors.full_messages, status: 422
    end
    render :show
  end
  private

  def tag_params
    params.require(:tag).permit(
      :category_id,
      :name
    )
  end
end