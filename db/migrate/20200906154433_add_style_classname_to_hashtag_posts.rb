class AddStyleClassnameToHashtagPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :hashtag_posts, :style_classname, :string
  end
end
