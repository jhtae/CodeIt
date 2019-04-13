class Api::NotebooksController < ApplicationController
  before_action :require_logged_in

  def index
    @notebooks = Notebook.where(params[:user_id])
    render :index
  end
  
  def show
    @notebook = Notebook.find(params[:id])
  end
  
  def create
    begin
      @notebook = Notebook.create(notebook_params)
    rescue => exception
      render json: @notebook.errors.full_messages, status: 422
    end
    render :show
  end
  private

  def note_params
    params.require(:notebook).permit(
      :user_id,
      :name,
      :descrioption
    )
  end
end
