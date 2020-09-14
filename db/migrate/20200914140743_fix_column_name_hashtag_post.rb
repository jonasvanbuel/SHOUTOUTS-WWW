class FixColumnNameHashtagPost < ActiveRecord::Migration[6.0]
  def change
    rename_column :hashtag_posts, :post_url, :pathname
  end
end
