import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Post from '../components/post';
import { fetchTaggedPosts } from '../actions';

class DashboardPostList extends Component {
  componentDidMount() {
    this.props.fetchTaggedPosts('mariotestino');
    // this.interval = setInterval(() => this.props.fetchTaggedPosts('mariotestino'), 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    const { taggedPosts } = this.props;
    return (
      <div className="dashboard-post-list">
        {taggedPosts.map((taggedPost) => {
          return <Post taggedPost={taggedPost} key={taggedPost.pathname} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    taggedPosts: state.taggedPosts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTaggedPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPostList);
