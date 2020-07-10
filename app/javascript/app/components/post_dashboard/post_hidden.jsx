import React, { Component } from 'react';

// COMPONENTS
import PostHiddenOptions from './post_hidden_options';

// HELPERS
import animatePostHiddenOptions from './helpers/animate_post_hidden_options';

class PostHidden extends Component {
  componentDidMount() {
    const { taggedPost } = this.props;
    animatePostHiddenOptions(taggedPost);
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  render() {
    const { taggedPost, stateHidden, setHidden } = this.props;
    return (
      <div className={`post-hidden ${taggedPost.hidden ? '' : 'invisible'}`}>
        <PostHiddenOptions
          taggedPost={taggedPost}
          stateHidden={stateHidden}
          setHidden={setHidden}
        />
        <div className="post-hidden-overlay">
          <div className="unhide-option">
            <i className="fas fa-eye-slash"></i>
            <span className="symbol-label">hidden</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PostHidden;
