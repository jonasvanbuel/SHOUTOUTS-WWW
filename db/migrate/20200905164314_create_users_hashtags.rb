class CreateUsersHashtags < ActiveRecord::Migration[6.0]
  def change
    create_table :users_hashtags do |t|
      t.references :user, null: false, foreign_key: true
      t.references :hashtag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
