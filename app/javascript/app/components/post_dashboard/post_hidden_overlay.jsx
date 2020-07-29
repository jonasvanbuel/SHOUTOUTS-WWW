import React, { Component } from 'react';

// HELPERS
import animatePostHiddenOptions from './helpers/animate_post_hidden_options';

class PostHiddenOverlay extends Component {
  render() {
    const { stateHidden } = this.props;
    return (
      <div className={`post-hidden-overlay ${stateHidden === true ? '' : 'invisible'}`}>
        <div className="unhide-option">
          <i className="fas fa-eye-slash"></i>
          <span className="symbol-label">hidden</span>
        </div>
      </div>
    );
  }
}

export default PostHiddenOverlay;
