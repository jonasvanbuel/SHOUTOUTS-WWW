import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { fetchTaggedPosts, updateSortedFilteredPosts } from '../actions';

// COMPONENTS
import PostDashboard from './post_dashboard/post_dashboard';

// HELPERS
import sortPosts from '../helpers/_sort_posts';
import filterPosts from '../helpers/_filter_posts';

class PostList extends Component {
  componentDidMount() {
    const {
      taggedPosts,
      sortedFilteredPosts,
      fetchTaggedPosts,
      updateSortedFilteredPosts
    } = this.props;
    fetchTaggedPosts('mariotestino');
    // this.interval = setInterval(() => this.props.fetchTaggedPosts('mariotestino'), 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    const { sortedFilteredPosts } = this.props;

    return (
      <div className="post-list" id="post-list">
        {sortedFilteredPosts.map((taggedPost) => {
          return <PostDashboard taggedPost={taggedPost} key={taggedPost.pathname} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    taggedPosts: state.taggedPosts,
    sortedFilteredPosts: state.sortedFilteredPosts,
    sortKey: state.sortKey,
    sortOrder: state.sortOrder,
    filtered: state.filtered,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTaggedPosts,
    updateSortedFilteredPosts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
