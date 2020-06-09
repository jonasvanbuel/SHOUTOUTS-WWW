class Api::V1::TaggedPostsController < ActionController::API
  before_action :set_instagram_account

  def index
    render json: most_recent_selection
  end

  def create
    # @instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    unless TaggedPost.find_by(pathname: params[:pathname])
      TaggedPost.create(
        instagram_account: @instagram_account,
        author: params[:author],
        message: params[:message],
        posted_at: params[:posted_at],
        pathname: params[:pathname],
        image_url: params[:image_url],
        user_avatar_url: params[:user_avatar_url],
        likes: params[:likes]
      )
    end
    render json: most_recent_selection
  end

  def update
    # instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    tagged_post = TaggedPost.find_by instagram_account: @instagram_account, pathname: params[:pathname]
    tagged_post[:likes] = params[:likes]
    tagged_post.save
    render json: most_recent_selection
  end

  def delete
    tagged_post = TaggedPost.find_by instagram_account: @instagram_account, pathname: params[:pathname]
    tagged_post.destroy
    render json: most_recent_selection
  end

  private

  # IMPLEMENT STRONG PARAMS

  def most_recent_selection
    tagged_posts = TaggedPost.where(instagram_account: @instagram_account)
    sorted_posts = tagged_posts.sort_by(&:posted_at).reverse[0..19]
    categorized_posts = add_style_classnames(sorted_posts, 'MR')
  end

  def wide_selection
    # instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    tagged_posts_selection = TaggedPost.where(instagram_account: @instagram_account)
    return tagged_posts_selection.sort_by(&:posted_at).reverse[0..9]
  end

  def set_instagram_account
    @instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
  end

  def add_style_classnames(posts_array, selection_type)
    categorized_posts = posts_array.map.with_index do |post, index|
      count = index + 1
      post["style_classname"] = "#{selection_type}_#{count < 10 ? "0#{count}" : count}"
      post
    end
  end
end
