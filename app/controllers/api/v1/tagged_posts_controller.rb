class Api::V1::TaggedPostsController < ActionController::API
  def index
    render json: core_selection
  end

  def create
    instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    unless TaggedPost.find_by(pathname: params[:pathname])
      TaggedPost.create(
        instagram_account: instagram_account,
        author: params[:author],
        message: params[:message],
        posted_at: params[:posted_at],
        pathname: params[:pathname],
        image_url: params[:image_url],
        user_avatar_url: params[:user_avatar_url],
        likes: params[:likes]
      )
    end
    render json: core_selection
  end

  def update
    instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    tagged_post = TaggedPost.find_by instagram_account: instagram_account, pathname: params[:pathname]
    tagged_post[:likes] = params[:likes]
    tagged_post.save
    render json: core_selection
  end

  # TO INCLUDE A WIDER SELECTION OF POSTS WHEN UPDATING?

  private

  def core_selection
    instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    tagged_posts_selection = TaggedPost.where(instagram_account: instagram_account)
    return tagged_posts_selection.sort_by(&:posted_at).reverse[0..9]
  end

  def render_wider_selection
  end

  # IMPLEMENT STRONG PARAMS


end
