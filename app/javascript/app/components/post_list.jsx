import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { fetchTaggedPosts } from '../actions';

// COMPONENTS
import PostDashboard from './post_dashboard/post_dashboard';

// HELPERS
import sortPosts from '../helpers/_sort_posts';
import filterPosts from '../helpers/_filter_posts';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchTaggedPosts('mariotestino');
    // this.interval = setInterval(() => this.props.fetchTaggedPosts('mariotestino'), 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    const {
      taggedPosts,
      sortKey,
      sortOrder,
      filtered,
      filter
    } = this.props;
    const filteredPosts = filtered === true ? filterPosts(taggedPosts, filtered, filter) : taggedPosts;
    // const filteredPosts = filterPosts(taggedPosts, filtered, filter);
    const filteredAndSortedPosts = sortPosts(filteredPosts, sortKey, sortOrder);

    return (
      <div className="post-list">
        {filteredAndSortedPosts.map((taggedPost) => {
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
    sortOrder: state.sortOrder,
    filtered: state.filtered,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTaggedPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
