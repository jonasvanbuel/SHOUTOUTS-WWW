class CreateTaggedPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :tagged_posts do |t|
      t.references :instagram_account, foreign_key: true
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
