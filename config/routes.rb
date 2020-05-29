Rails.application.routes.draw do
  devise_for :users, skip: [:sessions]    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_scope :user do
    get 'login', to: 'devise/sessions#new', as: :new_user_session
    post 'login', to: 'devise/sessions#create', as: :user_session
    delete 'logout', to: 'devise/sessions#destroy', as: :destroy_user_session
  end

  root to: 'pages#root'
  get '/dashboard', to: 'pages#root'
  get '/live', to: 'pages#root'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'tagged_posts/:instagram_username', to: 'tagged_posts#index'
      post 'tagged_posts/:instagram_username', to: 'tagged_posts#create'
      patch 'tagged_posts/:instagram_username', to: 'tagged_posts#update'
      delete 'tagged_posts/:instagram_username', to: 'tagged_posts#delete'
    end
  end
end
