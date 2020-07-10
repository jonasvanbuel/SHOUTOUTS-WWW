import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Truncate from 'react-truncate-html';

// ASSETS
import InstaLike from 'images/insta-like.png';
import InstaComment from 'images/insta-comment.png';
import InstaShare from 'images/insta-share.png';

// COMPONENTS
import PostHidden from './post_hidden';
import PostOptions from './post_options';

// ACTIONS - should be passed to options components?
import { hidePost, unhidePost } from '../../actions';

// HELPERS
import animatePostOptions from './helpers/animate_post_options';
import animateLabels from './helpers/animate_labels';
import timeDiffToString from '../../helpers/_time_helper';

class PostDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: props.taggedPost.hidden
    };
  }

  setHidden = (bool) => {
    this.setState({
      hidden: bool
    })
  }

  componentDidMount() {
    const { taggedPost } = this.props;
    animateLabels(taggedPost);
    animatePostOptions(taggedPost);
  }

  render() {
    const { taggedPost, hidePost, unhidePost } = this.props;
    const { hidden } = this.state;
    return (
      <div
        className="post post-dashboard"
        id={taggedPost.pathname}
      >
        <PostHidden taggedPost={taggedPost} stateHidden={hidden} setHidden={this.setHidden} />
        <PostOptions taggedPost={taggedPost} stateHidden={hidden} setHidden={this.setHidden} />

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
  return bindActionCreators({ hidePost, unhidePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostDashboard);
