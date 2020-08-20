import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { setFilter, setFiltered } from '../actions';

// COMPONENTS


class SearchTerms extends Component {

  handleClick = () => {
    console.log("close clicked...");

    const { setFiltered, setFilter } = this.props;

    setFiltered('');
    setFilter('');
  };

  renderSearchTerm = (filter) => {
    return (
      <div className="search-term">
        <span>{`"${filter}"`}</span>
        <i class="fas fa-times-circle" onClick={this.handleClick}></i>
      </div>
    );
  }

  render() {
    const { filtered, filter } = this.props;

    return (
      <div className="search-terms">
        {filtered == true ? this.renderSearchTerm(filter) : null}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    filtered: state.filtered,
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFiltered, setFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTerms);
