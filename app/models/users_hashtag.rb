class UsersHashtag < ApplicationRecord
  belongs_to :user
  belongs_to :hashtag
end
