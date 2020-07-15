import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { fetchTaggedPosts } from '../actions';

// COMPONENTS
import PostDashboard from './post_dashboard/post_dashboard';

// HELPERS
import sortPosts from '../helpers/_sort_posts';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchTaggedPosts('mariotestino');
    // this.interval = setInterval(() => this.props.fetchTaggedPosts('mariotestino'), 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    const { taggedPosts, sortKey, sortOrder } = this.props;
    const sortedPosts = sortPosts(taggedPosts, sortKey, sortOrder);

    return (
      <div className="post-list">
        {sortedPosts.map((taggedPost) => {
          return <PostDashboard taggedPost={taggedPost} key={taggedPost.pathname} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    taggedPosts: state.taggedPosts,
    sortKey: state.sortKey,
    sortOrder: state.sortOrder
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTaggedPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
