class Api::V1::TaggedPostsController < ActionController::API
  def index
    instagram_account = InstagramAccount.find_by(username: params[:instagram_username])
    tagged_posts = TaggedPost.where(instagram_account: instagram_account)
    render json: tagged_posts
  end
end
