import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import FilterBar from '../components/filter_bar';
import PostList from '../components/post_list';
import NoPostsFound from '../components/no_posts_found';
import ViewAllPosts from '../components/view_all_posts';

// ACTIONS
// import { setFiltered, setFilter } from '../actions';


class PostListContainer extends Component {
  render() {
    const { sortedFilteredPosts, filtered } = this.props;

    return (
      <div className="post-list-container">
        <FilterBar />
        <PostList />
        {filtered && sortedFilteredPosts.length === 0 ? <NoPostsFound /> : null}
        {filtered ? <ViewAllPosts /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sortedFilteredPosts: state.sortedFilteredPosts,
    filtered: state.filtered
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setFiltered, setFilter }, dispatch);
// }

export default connect(mapStateToProps)(PostListContainer);
