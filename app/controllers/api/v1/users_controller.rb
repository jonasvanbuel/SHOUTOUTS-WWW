class Api::V1::UsersController < ActionController::API
  def index
    if current_user
      render json: user_details
    else
      render json: user_unknown
    end
  end

  private

  # TO DO: STRONG PARAMS

  def user_details
    {
      first_name: current_user.first_name,
      last_name: current_user.last_name,
      post_type: current_user.post_type,
      instagram_account: current_user.instagram_account,
      hashtag: current_user.hashtag
    }
  end

  def user_unknown
    {
      status: "User not recognized..."
    }
  end
end
