import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { fetchUser } from '../actions/user_actions';

class Menu extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  renderFollowingTitle = () => {
    const { user } = this.props;
    return `Following ${user.post_type}s:`;
  };

  renderFollowingSubject = () => {
    const { user } = this.props;
    if (user.post_type === "hashtag") {
      return (
        <a className="btn-secondary-small" href={`https://www.instagram.com/explore/tags/${user.hashtag}/`} target="_blank">
          <div className="active-symbol"></div>
          {`#${user.hashtag}`}
        </a>
      )
    }
    if (user.post_type === "tagged_post") {
    }
  };

  render() {
    const { user } = this.props;

    return (
      <div className="menu">
        <div className="submenu-top">
          <a href="/live" target="_blank" className="start-livestream btn-primary-large">
            Start livestream
          </a>
          <div className="following-title">
            { user.post_type ? this.renderFollowingTitle() : null }
          </div>
        </div>
        <div className="submenu-bottom">
          { user.post_type ? this.renderFollowingSubject() : null }
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
  return bindActionCreators({
    fetchUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
