import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ACTIONS
import { setFilter, setFiltered } from '../actions';

// COMPONENTS


class SearchForm extends Component {

  handleChange = (event) => {
    const { setFilter, setFiltered } = this.props;
    setFiltered(event.target.value);
    setFilter(event.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <div className="search-form">
        <input
          type="text"
          placeholder="search"
          value={filter}
          onChange={this.handleChange}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
