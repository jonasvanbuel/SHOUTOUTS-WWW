import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { getLoginStatus } from '../../actions';

// COMPONENTS
// import PostDashboard from './post_dashboard/post_dashboard';
// import PostPlaceholder from './post_dashboard/post_placeholder';

// HELPERS
// import sortPosts from '../helpers/_sort_posts';
// import filterPosts from '../helpers/_filter_posts';


class SignIn extends Component {
  componentDidMount() {
    const { getLoginStatus } = this.props;
    getLoginStatus();
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="login-screen">
            <form onSubmit={this.onSubmitHandler}>
              <h1>{message}</h1>
              <input
                onChange={this.handleUsernameChange}
                type="text"
                name="username"
                placeholder="Username"
                required
                />

              <input
                onChange={this.handleEmailChange}
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <input
                onChange={this.handlePasswordChange}
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <input
                onChange={this.handleAvatarChange}
                type="file"
                accept="/images/*"
              />
              <button type="submit">
                Create Account
              </button>
            </form>
          </div>
          footer...
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLoginStatus,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


