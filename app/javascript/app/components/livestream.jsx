import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Post from '../components/post_livestream';
import { fetchPosts } from '../actions';

class Livestream extends Component {
  componentDidMount() {
    // Prevent scrolling of body
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = "hidden";

    this.props.fetchPosts();
    // this.interval = setInterval(() => this.props.fetchHashtagPosts(), 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="livestream-container">
        <div className="pink-glow"></div>
        {posts.map((post) => {
          return <Post taggedPost={post} key={post.pathname} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Livestream);
