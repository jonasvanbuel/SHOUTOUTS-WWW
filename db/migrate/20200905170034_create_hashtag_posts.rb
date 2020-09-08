class CreateHashtagPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :hashtag_posts do |t|
      t.references :hashtag, null: false, foreign_key: true
      t.string :post_type
      t.string :author
      t.text :message
      t.datetime :posted_at
      t.string :post_url
      t.string :image_url
      t.integer :likes

      t.timestamps
    end
  end
end
