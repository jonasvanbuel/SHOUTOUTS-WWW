import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { unhidePost } from '../../actions';

// HELPERS
import { fetchPostOptions } from './helpers';
import animatePostHiddenOptions from './helpers/animate_post_hidden_options';


class PostHiddenOptions extends Component {
  componentDidMount() {
    const { taggedPost } = this.props;
    animatePostHiddenOptions(taggedPost);
  }

  // componentDidUpdate() {
  //   const { taggedPost } = this.props;
  //   animatePostHiddenOptions(taggedPost);
  // }

  handleClick = () => {
    const { user, taggedPost, unhidePost, setHidden } = this.props;
    // Update local state postDashboard
    setHidden(false);

    // Dispatch server action
    unhidePost(taggedPost, user.post_type);
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

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ unhidePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostHiddenOptions);
