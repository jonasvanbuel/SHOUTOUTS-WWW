class TaggedPost < ApplicationRecord
  belongs_to :instagram_account

  has_many_attached :photos
end
