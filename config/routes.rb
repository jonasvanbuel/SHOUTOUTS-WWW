Rails.application.routes.draw do
  devise_for :users, skip: [:sessions]    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_scope :user do
    get '/signin', to: 'devise/sessions#new', as: :new_user_session
    post '/signin', to: 'devise/sessions#create', as: :user_session
    delete '/signout', to: 'devise/sessions#destroy', as: :destroy_user_session
  end

  root to: 'pages#root'
  get '/dashboard', to: 'pages#root'
  get '/live', to: 'pages#root'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do

      get 'user', to: 'users#index'
      get 'user_posts', to: 'tagged_posts#user_route'

      get 'tagged_posts/:instagram_username', to: 'tagged_posts#index'
      post 'tagged_posts/:instagram_username', to: 'tagged_posts#create'
      patch 'tagged_posts/update_likes', to: 'tagged_posts#update_likes'
      patch 'tagged_posts/update_hidden', to: 'tagged_posts#update_hidden'
      delete 'tagged_posts/delete', to: 'tagged_posts#delete'

      get 'hashtag_posts/:hashtag_name', to: 'hashtag_posts#index', as: :hashtag_posts_index
      post 'hashtag_posts/:hashtag_name', to: 'hashtag_posts#create'
      patch 'hashtag_posts/update_likes', to: 'hashtag_posts#update_likes'
      patch 'hashtag_posts/update_hidden', to: 'hashtag_posts#update_hidden'
      delete 'hashtag_posts/delete', to: 'hashtag_posts#delete'
    end
  end
end
