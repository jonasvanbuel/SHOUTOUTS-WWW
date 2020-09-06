class Hashtag < ApplicationRecord
  has_many :users_hashtags, dependent: :destroy
  has_many :users, through: :users_hashtags
end
