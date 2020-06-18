import React, { Component } from 'react';
import Truncate from 'react-truncate-html';

import InstaLike from 'images/insta-like.png';
import InstaComment from 'images/insta-comment.png';
import InstaShare from 'images/insta-share.png';

// Import HELPERS
import timeDiffToString from '../helpers/_time_helper';
import initPostOptions from '../helpers/_dashboard_post_options';

class PostLivestream extends Component {
  componentDidMount() {
    const { taggedPost } = this.props;
    initPostOptions(taggedPost);
  }

  render() {
    const { taggedPost } = this.props;
    return (
      <div
        className="post post-dashboard"
        id={taggedPost.pathname}
      >

        {(() => {
          if (taggedPost.hidden) {
            return (
              <div className="post-hidden">
                <div className="hide-option">
                  <i className="fas fa-eye-slash"></i>
                  <span className="symbol-label">hidden</span>
                </div>
              </div>
            );
          }
          return (
            <div className="post-options invisible">
              <div className="hide-option">
                <i className="fas fa-eye-slash"></i>
                <span className="symbol-label invisible">hide</span>
              </div>
              <div className="view-post-option">
                <i className="fas fa-external-link-square-alt"></i>
                <span className="symbol-label invisible">view post</span>
              </div>
            </div>
          );
        })()}



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
            {`${taggedPost.likes} likes`}
          </div>

          <div className="message">
            <span className="author">{taggedPost.author}</span>
            <span> </span>
            <Truncate
              lines={3}
              dangerouslySetInnerHTML={{
                __html: taggedPost.message
              }}
            />
          </div>

          <div className="time">
            {timeDiffToString(taggedPost.posted_at)}
          </div>
        </div>
      </div>
    );
  }
}

export default PostLivestream;
