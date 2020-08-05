import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import FilterBar from '../components/filter_bar';
import PostList from '../components/post_list';

// ACTIONS
import { setFiltered, setFilter } from '../actions';


class noPostsFound extends Component {
  render() {
    return (
      <div className="no-posts-found">
        <span>╮( ˘ ､ ˘ )╭</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filtered: state.filtered,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFiltered, setFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(noPostsFound);
