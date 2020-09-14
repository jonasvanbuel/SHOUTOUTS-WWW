class Api::V1::TaggedPostsController < ActionController::API
  before_action :set_instagram_account

  def index
    if current_user.post_type == "hashtag"
      redirect_to api_v1_hashtag_posts_index_path
    else
      render json: most_recent_selection
    end
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

  def update_likes
    # TO DO: REFACTOR TO DEDICATED IF STATEMENT
    tagged_post = TaggedPost.find_by instagram_account: @instagram_account, pathname: params[:pathname]
    tagged_post[:likes] = params[:likes]
    tagged_post.save
    render json: most_recent_selection
  end

  def update_hidden
    update_type = params[:type]

    if update_type === 'HIDE_POST'
      tagged_post = TaggedPost.find(params[:post_id])
      unless tagged_post[:hidden] = true
        tagged_post[:hidden] = true
      end
      if tagged_post.save
        render json: most_recent_selection
      end
    end

    if update_type === 'UNHIDE_POST'
      tagged_post = TaggedPost.find(params[:post_id])
      unless tagged_post[:hidden] = false
        tagged_post[:hidden] = false
      end
      if tagged_post.save
        render json: most_recent_selection
      end
    end
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
    sorted_posts = tagged_posts.sort_by(&:posted_at).reverse[0..29]
    categorized_posts = add_style_classnames(sorted_posts, 'MR')
  end

  def wide_selection
    # instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    tagged_posts_selection = TaggedPost.where(instagram_account: @instagram_account)
    return tagged_posts_selection.sort_by(&:posted_at).reverse[0]
  end

  def set_instagram_account
    if params[:instagram_username]
      @instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    elsif params[:instagram_account_id]
      @instagram_account = InstagramAccount.find(params[:instagram_account_id])
    end
  end

  def add_style_classnames(posts_array, selection_type)
    categorized_posts = posts_array.map.with_index do |post, index|
      number = index + 1
      post["style_classname"] = "#{selection_type}_#{number < 10 ? "0#{number}" : number}"
      post
    end
  end
end
