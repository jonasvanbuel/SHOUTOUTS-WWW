class AddUserAvatarUrlToHashtagPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :hashtag_posts, :user_avatar_url, :string
  end
end
