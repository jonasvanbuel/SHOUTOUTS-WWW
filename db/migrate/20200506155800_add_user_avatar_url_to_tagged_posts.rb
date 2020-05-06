class AddUserAvatarUrlToTaggedPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :tagged_posts, :user_avatar_url, :string
  end
end
