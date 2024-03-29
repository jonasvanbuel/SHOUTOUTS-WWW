require "open-uri"

class Api::V1::TaggedPostsController < ActionController::API
  before_action :set_instagram_account

  def user_route
    if current_user && current_user.post_type == "hashtag"
      # redirect_to api_v1_hashtag_posts_index_path
      user_hashtag = Hashtag.find_by(name: current_user.hashtag)
      redirect_to controller: 'hashtag_posts', action: 'index', hashtag_name: user_hashtag.name
    end

    if current_user && current_user.post_type == "tagged"
      index
    end
  end

  def index
    if current_user
      post_count = current_user.device_width ? set_post_count : 5
      render json: most_recent_selection(post_count)
    else
      # Calling from scraper
      render json: most_recent_selection(50)
    end
  end

  def create
    if TaggedPost.find_by(pathname: params[:pathname])
      update
    else
      # Upload image URLs to Cloudinary first
      image_response = Cloudinary::Uploader.upload(params[:image_url],
        folder: "shoutouts/#{clean_pathname(params[:pathname])}",
        public_id: 'image')
      avatar_response = Cloudinary::Uploader.upload(params[:user_avatar_url],
        folder: "shoutouts/#{clean_pathname(params[:pathname])}",
        public_id: 'avatar')

      TaggedPost.create(
        instagram_account: @instagram_account,
        post_type: params[:post_type],
        author: params[:author],
        message: params[:message],
        posted_at: params[:posted_at],
        pathname: params[:pathname],
        image_url: image_response['secure_url'],
        user_avatar_url: avatar_response['secure_url'],
        likes: params[:likes],
        style_classname: params[:style_classname]
      )
      index
    end
  end

  def update
    tagged_post = TaggedPost.find_by(pathname: params[:pathname])
    tagged_post.update(
      likes: params[:likes] || 0,
    )
    if tagged_post.save
      index
    end
  end

  def update_likes
    # TO DO: REFACTOR TO DEDICATED IF STATEMENT
    post = TaggedPost.find(params[:post_id]) || HashtagPost.find(params[:post_id])
    post[:likes] = params[:likes]
    post.save
    render json: most_recent_selection
  end

  # TODO: REDIRECT TO HASHTAG_CONTROLLER
  def update_hidden
    if params[:post_type] === "hashtag"
      redirect_to controller: 'hashtag_posts', action: 'update_hidden'
    end

    if params[:post_type] === "instagram_account"
      action_type = params[:action_type]
      if action_type === 'HIDE_POST'
        tagged_post = TaggedPost.find(params[:post_id])

        unless tagged_post[:hidden] = true
          tagged_post[:hidden] = true
        end
        if tagged_post.save
          render json: most_recent_selection
        end
      end

      if action_type === 'UNHIDE_POST'
        tagged_post = TaggedPost.find(params[:post_id])
        unless tagged_post[:hidden] = false
          tagged_post[:hidden] = false
        end
        if tagged_post.save
          render json: most_recent_selection
        end
      end
    end
  end

  def delete
    post = TaggedPost.find(params[:post_id])
    post.destroy
    render json: most_recent_selection
  end

  private

  # IMPLEMENT STRONG PARAMS

  def set_post_count
    case current_user.device_width
    when 0..576
      8
    when 577..768
      10
    when 769..992
      20
    when 993..1200
      30
    when 1201..1440
      35
    when 1440..10000
      40
    end
  end

  def most_recent_selection(post_count)
    tagged_posts = TaggedPost.where(instagram_account: @instagram_account)
    sorted_posts = tagged_posts.sort_by { |post| post.likes || 0 }
    sliced_posts = sorted_posts.reverse[0..post_count-1]

    categorized_posts = add_style_classnames(sliced_posts, 'MR')
  end

  def wide_selection
    # instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    tagged_posts_selection = TaggedPost.where(instagram_account: @instagram_account)
    return tagged_posts_selection.sort_by(&:posted_at).reverse[0]
  end

  def set_instagram_account

    # From browser session
    if current_user
      @instagram_account = InstagramAccount.find_by(username: current_user.instagram_account)
    end

    # From API (scraper and postman)
    if params[:instagram_username]
      @instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    end

    # if params[:instagram_username]
    #   @instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    # elsif params[:instagram_account_id]
    #   @instagram_account = InstagramAccount.find(params[:instagram_account_id])
    # end
  end

  def add_style_classnames(posts_array, selection_type)
    categorized_posts = posts_array.map.with_index do |post, index|
      number = index + 1
      post["style_classname"] = "#{selection_type}_#{number < 10 ? "0#{number}" : number}"
      post
    end
  end

  def clean_pathname(old_pathname)
    old_pathname.slice(3, old_pathname.length).chomp("/");
  end
end
