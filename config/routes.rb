Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :notebooks
    resources :notes
    resources :note_tags, only: [:create]
  end
  root "static_pages#root"
end
