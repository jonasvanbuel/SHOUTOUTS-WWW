class InstagramAccount < ApplicationRecord
  has_many :users_instagram_accounts
  has_many :users, through: :users_instagram_accounts
  has_many :tagged_posts
end
