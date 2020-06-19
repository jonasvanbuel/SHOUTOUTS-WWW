import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Truncate from 'react-truncate-html';

import InstaLike from 'images/insta-like.png';
import InstaComment from 'images/insta-comment.png';
import InstaShare from 'images/insta-share.png';

// Import ACTIONS
import { hidePost } from '../actions';

// Import HELPERS
import timeDiffToString from '../helpers/_time_helper';
import animatePost from '../animation_dashboard';

class PostDashboard extends Component {
  componentDidMount() {
    const { taggedPost } = this.props;
    animatePost(taggedPost);
  }

  // TO DO: EXTERNALISE POST_OPTIONS AND POST_HIDDEN COMPONENTS
  render() {
    const { taggedPost, hidePost } = this.props;
    return (
      <div
        className="post post-dashboard"
        id={taggedPost.pathname}
      >
        <div
          className={`post-hidden ${taggedPost.hidden ? '' : 'invisible'}`}
        >
          <div className="hide-option">
            <i className="fas fa-eye-slash"></i>
            <span className="symbol-label">hidden</span>
          </div>
        </div>

        <div className="post-options invisible">
          <div className="hide-option">
            <i className="fas fa-eye-slash" onClick={() => hidePost(taggedPost)}></i>
            <span className="symbol-label invisible">hide</span>
          </div>
          <div className="view-post-option">
            <i className="fas fa-external-link-square-alt"></i>
            <span className="symbol-label invisible">view post</span>
          </div>
        </div>

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hidePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostDashboard);
