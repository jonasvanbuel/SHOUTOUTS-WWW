class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  before_action :authorized_user?

  # Disable Rails default authenticity token checks, a security token generated
  # from session data by Rails. Rails forms auto pass this to the params to the
  # server, but since we're using React for this we're not using this.
  skip_before_action :verify_authenticity_token

  # Required to pass below helper methods to child controllers
  helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!

  # Authorizing users based on session data
  def login!
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorized_user?
    @user == current_user
  end

  def logout!
    session.clear
  end
end
