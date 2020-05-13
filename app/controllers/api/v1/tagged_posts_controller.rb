class Api::V1::TaggedPostsController < ActionController::API
  def index
    render json: render_index
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
    render json: render_index
  end

  # render the entire set of posts that need to possibly be re-rendered

  private

  def render_index
    instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    return TaggedPost.where(instagram_account: instagram_account)
  end
end
