Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'tagged_posts/:instagram_username', to: 'tagged_posts#index'
    end
  end
end
