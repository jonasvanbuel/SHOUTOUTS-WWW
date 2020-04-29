class CreateUsersInstagramAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :users_instagram_accounts do |t|
      t.references :user, foreign_key: true
      t.references :instagram_account, foreign_key: true

      t.timestamps
    end
  end
end
