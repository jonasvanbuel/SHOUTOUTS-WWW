import React, { Component } from 'react';

// COMPONENTS
import PostHiddenOptions from './post_hidden_options';
import PostHiddenOverlay from './post_hidden_overlay';
import PostOptions from './post_options';
import PostContent from './post_content';

// HELPERS
import animatePostOptions from './helpers/animate_post_options';
import animateLabels from './helpers/animate_labels';

class PostDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: props.taggedPost.hidden
    };
  }

  setHidden = (bool) => {
    this.setState({
      hidden: bool
    })
  }

  componentDidMount() {
    const { taggedPost } = this.props;
    animateLabels(taggedPost);
    // animatePostOptions(taggedPost);
  }

  render() {
    const { taggedPost } = this.props;
    const { hidden } = this.state;

    return (
      <div className="post post-dashboard" id={taggedPost.pathname} data-hidden={hidden}>
        <PostHiddenOptions taggedPost={taggedPost} stateHidden={hidden} setHidden={this.setHidden} />
        <PostHiddenOverlay taggedPost={taggedPost} stateHidden={hidden} />
        <PostOptions taggedPost={taggedPost} stateHidden={hidden} setHidden={this.setHidden} />
        <PostContent taggedPost={taggedPost} stateHidden={hidden} />
      </div>
    );
  }
}

export default PostDashboard;

