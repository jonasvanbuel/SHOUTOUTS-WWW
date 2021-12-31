import React, { Component } from 'react';
import Truncate from 'react-truncate-html';

// ASSETS
import InstaLike from 'images/insta-like.png';
import InstaComment from 'images/insta-comment.png';
import InstaShare from 'images/insta-share.png';


// HELPERS
import timeDiffToString from '../../helpers/_time_helper';

class PostContent extends Component {
  render() {
    const { taggedPost } = this.props;
    return (
      <div className="post-content noselect">
        <div className="header">
          <img className="avatar" src={taggedPost.user_avatar_url} alt={taggedPost.author} />
          <div className="author">
            {taggedPost.author}
          </div>
        </div>

        <div className="img-container">
          <img src={taggedPost.image_url} alt={`${taggedPost.message.slice(0, 20)}...`} />
        </div>

        <div className="icon-container">
          <img src={InstaLike} className="icon" alt="" />
          <img src={InstaComment} className="icon" alt="" />
          <img src={InstaShare} className="icon" alt="" />
        </div>

        <div className="likes">
          {`${Number(taggedPost.likes).toLocaleString()} likes`}
        </div>

        <div className="message">
          <span className="author">{taggedPost.author}</span>
          <span> </span>
          <Truncate
            lines={2.5}
            dangerouslySetInnerHTML={{
              __html: taggedPost.message
            }}
          />
        </div>

        <div className="time">
          {timeDiffToString(taggedPost.posted_at)}
        </div>
      </div>
    );
  }
}

export default PostContent;
