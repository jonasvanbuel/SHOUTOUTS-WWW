import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { setSortKey, setSortOrder } from '../actions';

// COMPONENTS


class FilterBar extends Component {
  handlePostedClick = (event) => {
    event.preventDefault();
    const { sortKey, sortOrder, setSortKey, setSortOrder } = this.props;
    if (sortKey === 'posted') {
      sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder('asc');
    }
    if (sortKey === 'likes') {
      setSortKey('posted');
      setSortOrder('desc');
    }
  };

  handleLikesClick = (event) => {
    event.preventDefault();
    const { sortKey, sortOrder, setSortKey, setSortOrder } = this.props;
    if (sortKey === 'likes') {
      sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder('asc');
    }
    if (sortKey === 'posted') {
      setSortKey('likes');
      setSortOrder('desc');
    }
  };

  render() {
    const { sortKey, sortOrder } = this.props;
    function evaluateCaret(labelSortKey) {
      if (labelSortKey !== sortKey) {
        return 'neutral';
      }
      if (sortOrder === 'asc') {
        return 'asc';
      }
      if (sortOrder === 'desc') {
        return 'desc'
      }
      return '';
    };
    return (
      <div className="filter-bar">
        <div className="search-form">
          search
        </div>
        <div className="filter-options">
          <div className="filter-label">
            sort by:
          </div>
          <div className="filter-option" id="filter-option-posted">
            <i className={`fas fa-caret-up ${evaluateCaret('posted')}`}></i>
            <button type="button" onClick={this.handlePostedClick}>posted</button>
          </div>
          <div className="filter-option" id="filter-option-likes">
            <i className={`fas fa-caret-up ${evaluateCaret('likes')}`}></i>
            <button type="button" onClick={this.handleLikesClick}>likes</button>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    taggedPosts: state.taggedPosts,
    sortKey: state.sortKey,
    sortOrder: state.sortOrder
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSortKey, setSortOrder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
