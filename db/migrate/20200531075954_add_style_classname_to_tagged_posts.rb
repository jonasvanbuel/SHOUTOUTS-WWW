class AddStyleClassnameToTaggedPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :tagged_posts, :style_classname, :string
  end
end
