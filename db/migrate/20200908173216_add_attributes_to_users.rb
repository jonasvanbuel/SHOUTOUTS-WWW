class AddAttributesToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :post_type, :string
    add_column :users, :instagram_account, :string
    add_column :users, :hashtag, :string
  end
end
