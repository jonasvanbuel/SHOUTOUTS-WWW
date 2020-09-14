import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { fetchPosts, updateSortedFilteredPosts } from '../actions';

// COMPONENTS
import PostDashboard from './post_dashboard/post_dashboard';
import PostPlaceholder from './post_dashboard/post_placeholder';

// HELPERS
import sortPosts from '../helpers/_sort_posts';
import filterPosts from '../helpers/_filter_posts';

class PostList extends Component {
  componentDidMount() {
    const {
      posts,
      sortedFilteredPosts,
      fetchPosts,
      updateSortedFilteredPosts
    } = this.props;
    fetchPosts();

    // this.interval = setInterval(() => this.props.fetchTaggedPosts('mariotestino'), 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  renderPlaceholdersOrPosts = () => {
    const {
      posts,
      sortedFilteredPosts,
      filtered
    } = this.props;

    // If still loading state, display placeholders
    if (posts.length === 0) {
      const times = 7;
      return [...Array(times)].map(() => {
        return <PostPlaceholder />
      })
    }

    // If state has arrived, display actual posts
    if (sortedFilteredPosts.length > 1) {
      return sortedFilteredPosts.map((post) => {
        return <PostDashboard taggedPost={post} key={post.pathname} />;
      })
    }
  }

  render() {
    return (
      <div className="post-list" id="post-list">
        {this.renderPlaceholdersOrPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    sortedFilteredPosts: state.sortedFilteredPosts,
    sortKey: state.sortKey,
    sortOrder: state.sortOrder,
    filtered: state.filtered,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts,
    updateSortedFilteredPosts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
