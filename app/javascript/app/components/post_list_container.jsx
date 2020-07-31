import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import FilterBar from '../components/filter_bar';
import PostList from '../components/post_list';

// ACTIONS
import { setFiltered, setFilter } from '../actions';


class PostListContainer extends Component {
  componentDidMount() {
    const viewAllPosts = document.getElementsByClassName('view-all-posts')[0];
    const label = viewAllPosts.getElementsByClassName('symbol-label')[0];
    const symbol = label.parentElement.getElementsByClassName('fas')[0];

    symbol.addEventListener('mouseenter', () => {
      if (label.classList.contains('invisible')) {
        label.classList.remove('invisible');
      }
    });
    symbol.addEventListener('mouseleave', () => {
      if (!label.classList.contains('invisible')) {
        label.classList.add('invisible');
      }
    });
  }

  handleClick = () => {
    const { setFiltered, setFilter } = this.props;
    setFiltered('');
    setFilter('');
  }

  render() {
    const { filtered } = this.props;

    return (
      <div className="post-list-container">
        <FilterBar />
        <PostList />
        <div className={`view-all-posts${filtered === true ? '' : ' invisible'}`}>
          <i className="fas fa-plus-circle" onClick={this.handleClick}></i>
          <span className="symbol-label invisible">view all posts</span>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
