class Api::V1::HashtagPostsController < ActionController::API
  before_action :set_hashtag

  def index
    render json: {
      hashtag: @hashtag,
      post_urls: render_post_urls,
      hashtag_posts: most_popular_selection
    }
  end

  def create
    if HashtagPost.find_by(post_url: params[:post_url])
      update
    else HashtagPost.create(
          hashtag: @hashtag,
          post_type: params[:post_type],
          author: params[:author],
          message: params[:message],
          posted_at: params[:posted_at],
          post_url: params[:post_url],
          image_url: params[:image_url],
          likes: params[:likes] || 0,
          user_avatar_url: params[:user_avatar_url],
          style_classname: params[:style_classname]
        )
      index
    end
  end

  def update
    hashtag_post = HashtagPost.find_by(post_url: params[:post_url])
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

  # STRONG PARAMS

  def set_hashtag
    if params[:hashtag_name]
      @hashtag = Hashtag.find_by(name: params[:hashtag_name])
    end
  end

  def most_popular_selection
    hashtag_posts = HashtagPost.where(hashtag: @hashtag)
    sorted_posts = hashtag_posts.sort_by { |post| post.likes || 0 }
    sliced_posts = sorted_posts.reverse[0..49]
    categorized_posts = add_style_classnames(sorted_posts, 'MP')
  end

  def add_style_classnames(posts_array, selection_type)
    categorized_posts = posts_array.map.with_index do |post, index|
      number = index + 1
      post["style_classname"] = "#{selection_type}_#{number < 10 ? "0#{number}" : number}"
      post
    end
  end

  def render_post_urls
    posts = HashtagPost.all
    post_urls = posts.map do |post|
      post.post_url
    end
    post_urls
  end
end
