class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def redirect_to_dashboard
    redirect_to dashboard_path
  end
end
