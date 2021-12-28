class AddPostTypeToTaggedPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :tagged_posts, :post_type, :string
  end
end
