Rails.application.routes.draw do
  devise_for :users, skip: [:sessions]
  devise_scope :user do
    get 'login', to: 'devise/sessions#new', as: :new_user_session
    post 'login', to: 'devise/sessions#create', as: :user_session
    delete 'logout', to: 'devise/sessions#destroy', as: :destroy_user_session
  end

  root to: 'application#redirect_to_dashboard'
  get '/dashboard', to: 'pages#dashboard'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'tagged_posts/:instagram_username', to: 'tagged_posts#index'
      post 'tagged_posts/:instagram_username', to: 'tagged_posts#create'
    end
  end
end
