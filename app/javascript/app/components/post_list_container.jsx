import React, { Component } from 'react';

// COMPONENTS
import FilterBar from '../components/filter_bar';
import PostList from '../components/post_list';

class PostListContainer extends Component {
  render() {
    return (
      <div className="post-list-container">
        <FilterBar />
        <div className="currently-livestreaming-title">
          currently livestreaming:
        </div>
        <PostList />
      </div>
    );
  }
}

export default PostListContainer;
