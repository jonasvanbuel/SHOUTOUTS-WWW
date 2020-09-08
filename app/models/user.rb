class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :users_instagram_accounts
  has_many :instagram_accounts, through: :users_instagram_accounts

  has_many :users_hashtags, dependent: :destroy
  has_many :hashtags, through: :users_hashtags
end
