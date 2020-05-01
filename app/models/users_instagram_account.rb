class UsersInstagramAccount < ApplicationRecord
  belongs_to :user
  belongs_to :instagram_account
end
