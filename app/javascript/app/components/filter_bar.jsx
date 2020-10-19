import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { setSortKey, setSortOrder, updateSortedFilteredPosts } from '../actions';

// COMPONENTS
import SearchForm from './search_form';
import SearchTerms from './search_terms';


class FilterBar extends Component {
  // Change redux state
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
    const {
      sortKey,
      sortOrder,
      setSortKey,
      setSortOrder,
      updateSortedFilteredPosts
    } = this.props;

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
        <div className="filter-sub" type="search-form">
          <SearchForm />
        </div>
        <div className="filter-sub" type="search-options">
          <SearchTerms />
          <div className="sort-options" data-sort-key={sortKey}>
            <div className="sort-label">
              Sort by:
            </div>
            <div className="sort-options-buttons">
              <div
                className={`sort-option btn-secondary-switch ${sortKey === "posted" ? "btn-secondary-switch-selected" : ""}`}
                id="sort-option-posted"
                onClick={this.handlePostedClick}
              >
                <i className={`fas fa-caret-up ${evaluateCaret('posted')}`}></i>
                <span>posted</span>
              </div>
              <div
                className={`sort-option btn-secondary-switch ${sortKey === "likes" ? "btn-secondary-switch-selected" : ""}`}
                id="sort-option-likes"
                onClick={this.handleLikesClick}
              >
                <i className={`fas fa-caret-up ${evaluateCaret('likes')}`}></i>
                <span>likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

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
  return bindActionCreators({ setSortKey, setSortOrder, updateSortedFilteredPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
