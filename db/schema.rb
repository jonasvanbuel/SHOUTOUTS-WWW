# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_05_163835) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hashtags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "instagram_accounts", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tagged_posts", force: :cascade do |t|
    t.bigint "instagram_account_id"
    t.string "author"
    t.text "message"
    t.datetime "posted_at"
    t.string "pathname"
    t.string "image_url"
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_avatar_url"
    t.string "style_classname"
    t.boolean "hidden", default: false
    t.index ["instagram_account_id"], name: "index_tagged_posts_on_instagram_account_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "users_instagram_accounts", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "instagram_account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["instagram_account_id"], name: "index_users_instagram_accounts_on_instagram_account_id"
    t.index ["user_id"], name: "index_users_instagram_accounts_on_user_id"
  end

  add_foreign_key "tagged_posts", "instagram_accounts"
  add_foreign_key "users_instagram_accounts", "instagram_accounts"
  add_foreign_key "users_instagram_accounts", "users"
end
