class Api::NotebooksController < ApplicationController

  def index
    @notebooks = Notebook.where(user_id: params[:user_id])
    render :index
  end
  
  def show
    @notebook = Notebook.find(params[:id])
    render :show
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

  def notebook_params
    params.require(:notebook).permit(
      :user_id,
      :name,
      :descrioption
    )
  end
end
