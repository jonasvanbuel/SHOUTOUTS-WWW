class AddHiddenToTaggedPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :tagged_posts, :hidden, :boolean, default: false
  end
end
