import React, { Component } from 'react';

// COMPONENTS
import FilterBar from '../components/filter_bar';
import PostList from '../components/post_list';

class PostListContainer extends Component {
  render() {
    return (
      <div className="post-list-container">
        <FilterBar />
        <PostList />
      </div>
    );
  }
}

export default PostListContainer;
