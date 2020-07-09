import React, { Component } from 'react';

// COMPONENTS
import PostHiddenOptions from './post_hidden_options';

// HELPERS
import { fetchPostHidden, fetchPostHiddenOptions, fetchPostHiddenOverlay } from './helpers';

class PostHidden extends Component {
  componentDidMount() {
    const { taggedPost, stateHidden } = this.props;
    const postHidden = fetchPostHidden(taggedPost);
    const postHiddenOptions = fetchPostHiddenOptions(taggedPost);
    const posthiddenOverlay = fetchPostHiddenOverlay(taggedPost);

    // const hiddenIcon = postHidden.getElementsByClassName('fa-eye-slash')[0];

    if (postHidden && postHiddenOptions) {
      // MOUSE-ENTER
      // If post is hidden, show postHiddenOptions
      // Hide icon in icon-container
      postHidden.addEventListener('mouseenter', () => {
        console.log('postHidden mouseenter eventlistener triggered...');


        // TODO: CAN I PREVENT MOUSEENTER LISTENER TO KICK IN


        if (taggedPost.hidden && postHiddenOptions.classList.contains('invisible')) {
          if (!posthiddenOverlay.classList.contains('invisible')) {
            posthiddenOverlay.classList.add('invisible');
          }
          postHiddenOptions.classList.remove('invisible');
        }
      });

      // MOUSE-LEAVE
      // Regardless of whether post is hidden, hide postHiddenOptions
      // If post is hidden, show icon
      postHidden.addEventListener('mouseleave', () => {
        if (!postHiddenOptions.classList.contains('invisible')) {
          if (taggedPost.hidden && posthiddenOverlay.classList.contains('invisible')) {
            posthiddenOverlay.classList.remove('invisible');
          }
          postHiddenOptions.classList.add('invisible');
        }
      });
    }
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  render() {
    const { taggedPost, stateHidden } = this.props;
    return (
      <div className={`post-hidden ${taggedPost.hidden ? '' : 'invisible'}`}>
        <PostHiddenOptions taggedPost={taggedPost} stateHidden={stateHidden} />
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
