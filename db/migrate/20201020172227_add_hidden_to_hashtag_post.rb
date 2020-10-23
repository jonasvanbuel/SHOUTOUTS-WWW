class AddHiddenToHashtagPost < ActiveRecord::Migration[6.0]
  def change
    add_column :hashtag_posts, :hidden, :boolean, default: false
  end
end
