class Api::V1::HashtagPostsController < ActionController::API
  before_action :set_hashtag

  def index
    render json: most_popular_selection
  end

  def create
    if HashtagPost.find_by(pathname: params[:pathname])
      update
    else HashtagPost.create(
          hashtag: @hashtag,
          post_type: params[:post_type],
          author: params[:author],
          message: params[:message],
          posted_at: params[:posted_at],
          pathname: params[:pathname],
          image_url: params[:image_url],
          likes: params[:likes] || 0,
          user_avatar_url: params[:user_avatar_url],
          style_classname: params[:style_classname]
        )
      index
    end
  end

  def update
    hashtag_post = HashtagPost.find_by(pathname: params[:pathname])
    hashtag_post.update(
      message: params[:message],
      image_url: params[:image_url],
      likes: params[:likes] || 0,
      user_avatar_url: params[:user_avatar_url]
    )
    if hashtag_post.save
      index
    end
  end

  def update_likes
  end

  def update_hidden
  end

  def delete
  end

  private

  # TO DO: STRONG PARAMS

  def set_hashtag
    # For website
    if current_user
      if current_user.post_type == "hashtag" && current_user.hashtag
        @hashtag = Hashtag.find_by(name: current_user.hashtag)
      end
    end

    # For scraper and postman
    if params[:hashtag_name]
      @hashtag = Hashtag.find_by(name: params[:hashtag_name])
    end
  end

  def most_popular_selection
    hashtag_posts = HashtagPost.where(hashtag: @hashtag)
    sorted_posts = hashtag_posts.sort_by { |post| post.likes || 0 }
    sliced_posts = sorted_posts.reverse[0..49]
    categorized_posts = add_style_classnames(sliced_posts, 'MR')
    # categorized_posts
  end

  def add_style_classnames(posts_array, selection_type)
    categorized_posts = posts_array.map.with_index do |post, index|
      number = index + 1
      post["style_classname"] = "#{selection_type}_#{number < 10 ? "0#{number}" : number}"
      post
    end
  end

  def render_pathnames
    posts = HashtagPost.all
    pathnames = posts.map do |post|
      post.pathname
    end
    pathnames
  end
end
