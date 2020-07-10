import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { unhidePost } from '../../actions';

// HELPERS
import { fetchPostOptions } from './helpers';

class PostHiddenOptions extends Component {
  handleClick = () => {
    const { taggedPost, unhidePost, setHidden } = this.props;
    // Update local state postDashboard
    setHidden(false);

    // Dispatch server action
    unhidePost(taggedPost);
  }

  render() {
    const { taggedPost, stateHidden, setHidden } = this.props;
    return (
      <div className="post-hidden-options invisible">
        <div className="unhide-option">
          <i className="fas fa-eye" onClick={this.handleClick}></i>
          <span className="symbol-label invisible">unhide</span>
        </div>
        <div className="view-post-option">
          <a href={`https://www.instagram.com${taggedPost.pathname}`} target="_blank">
            <i className="fas fa-external-link-square-alt"></i>
          </a>
          <span className="symbol-label invisible">view post</span>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ unhidePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostHiddenOptions);
