import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InstagramCard from '../components/instagram_card';
import { fetchTaggedPosts } from '../actions';

class LivestreamPostList extends Component {
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
      <div className="dashboard-post-list">
        {taggedPosts.map((taggedPost) => {
          return <InstagramCard taggedPost={taggedPost} key={taggedPost.pathname} />;
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(LivestreamPostList);
