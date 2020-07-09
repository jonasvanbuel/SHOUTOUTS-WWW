import React, { Component } from 'react';

// Import components
import PostDashboard from './post_dashboard/post_dashboard';

class PostList extends Component {
  render() {
    const { taggedPosts } = this.props;
    return (
      <div className="post-list">
        {taggedPosts.map((taggedPost) => {
          return <PostDashboard taggedPost={taggedPost} key={taggedPost.pathname} />;
        })}
      </div>
    );
  }
}

export default PostList;
