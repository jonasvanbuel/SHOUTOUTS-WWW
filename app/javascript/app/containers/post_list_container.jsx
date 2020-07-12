import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTaggedPosts } from '../actions';

import FilterBar from '../components/filter_bar';
import PostList from '../components/post_list';

class PostListContainer extends Component {
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
      <div className="post-list-container">
        <FilterBar />
        <PostList taggedPosts={taggedPosts} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
