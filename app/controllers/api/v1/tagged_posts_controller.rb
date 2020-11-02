class Api::V1::TaggedPostsController < ActionController::API
  before_action :set_instagram_account, except: :user_route

  def user_route
    if current_user && current_user.post_type == "hashtag"
      # redirect_to api_v1_hashtag_posts_index_path
      user_hashtag = Hashtag.find_by(name: current_user.hashtag)
      redirect_to controller: 'hashtag_posts', action: 'index', hashtag_name: user_hashtag.name
    end

    if current_user && current_user.post_type == "tagged_post"
      index
    end
  end

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
      5
    when 577..768
      10
    when 769..992
      20
    when 993..1200
      30
    when 1201..1440
      40
    when 1440..10000
      75
    end
  end

  def most_recent_selection
    post_count = current_user.device_width ? set_post_count : 5

    tagged_posts = TaggedPost.where(instagram_account: @instagram_account)
    sorted_posts = tagged_posts.sort_by(&:posted_at).reverse[0..post_count]
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
