class Api::V1::HashtagPostsController < ActionController::API
  before_action :set_hashtag

  def index
    render json: {
      hashtag: @hashtag,
      hashtag_posts: most_popular_selection
    }
  end

  def create
    unless HashtagPost.find_by(post_url: params[:post_url])
      HashtagPost.create(
        hashtag: @hashtag,
        post_type: params[:post_type],
        author: params[:author],
        message: params[:message],
        posted_at: params[:posted_at],
        post_url: params[:post_url],
        image_url: params[:image_url],
        likes: params[:likes],
        user_avatar_url: params[:user_avatar_url],
        style_classname: params[:style_classname]
      )
    end
    # ELSE UPDATE LIKES, MESSAGE, ETC

    index
  end

  def update_likes
  end

  def update_hidden
  end

  def delete
  end

  private

  # STRONG PARAMS

  def set_hashtag
    if params[:hashtag_name]
      @hashtag = Hashtag.find_by(name: params[:hashtag_name])
    end
  end

  def most_popular_selection
    hashtag_posts = HashtagPost.where(hashtag: @hashtag)
    sorted_posts = hashtag_posts.sort_by(&:likes).reverse
    categorized_posts = add_style_classnames(sorted_posts, 'MP')
  end

  def add_style_classnames(posts_array, selection_type)
    categorized_posts = posts_array.map.with_index do |post, index|
      number = index + 1
      post["style_classname"] = "#{selection_type}_#{number < 10 ? "0#{number}" : number}"
      post
    end
  end

end
