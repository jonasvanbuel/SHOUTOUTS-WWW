import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTaggedPosts } from '../actions';

class DashboardPostList extends Component {
  componentDidMount() {
    this.props.fetchTaggedPosts('mariotestino');
  }

  render() {
    return (
      <ul>
        <li>Post 1</li>
        <li>Post 2</li>
        <li>Post 3</li>
        <li>Post 4</li>
        <li>Post 5</li>
      </ul>
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
