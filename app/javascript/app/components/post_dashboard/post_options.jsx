import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// HELPERS
import { fetchPost, fetchPostOptions } from './helpers';

// ACTIONS
import { hidePost } from '../../actions';

class PostOptions extends Component {
  handleClick = () => {
    const { taggedPost, hidePost, setHidden } = this.props;
    // Update state postDashboard
    // setHidden(true);

    // DOESN'T SEEM TO BE WORKING! Remove eventListeners from post...
    // const post = fetchPost(taggedPost);
    // post.removeEventListener('mouseenter', onMouseEnterHandler);
    // post.removeEventListener('mouseleave', onMouseLeaveHandler);

    // Dispatch server action
    hidePost(taggedPost);
  }

  render() {
    const { taggedPost, stateHidden, setHidden } = this.props;
    return (
      <div className="post-options invisible">
        <div className="hide-option">
          <i className="fas fa-eye-slash" onClick={this.handleClick}></i>
          <span className="symbol-label invisible">hide</span>
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
  return bindActionCreators({ hidePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostOptions);
