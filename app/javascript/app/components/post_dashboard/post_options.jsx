import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { hidePost } from '../../actions';

// HELPERS
import { fetchPost, fetchPostOptions } from './helpers';
import animatePostOptions from './helpers/animate_post_options';


class PostOptions extends Component {
  componentDidMount() {
    const { taggedPost } = this.props;
    animatePostOptions(taggedPost);
  }

  // componentDidUpdate() {
  //   const { taggedPost } = this.props;
  //   animatePostOptions(taggedPost);
  // }

  handleClick = () => {
    const { taggedPost, hidePost, setHidden } = this.props;
    // Update local state postDashboard
    setHidden(true);

    // Dispatch server action
    hidePost(taggedPost);
  }

  render() {
    const { taggedPost, stateHidden, setHidden } = this.props;
    return (
      <div className={`post-options invisible`}>
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
