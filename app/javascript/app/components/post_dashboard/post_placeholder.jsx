import React from 'react';

// ASSETS
import WaveIllustration from 'images/post-placeholder-wave-v1.svg';

const PostPlaceholder = () => {
  return (
    <div className="post-placeholder noselect">
      <div className="post-content">
        <div className="header">
          <div className="avatar"></div>
          <div className="line line-short"></div>
        </div>

        <div className="img-container">
          <img src={WaveIllustration} className="wave-illustration" alt="" />
        </div>

        <div className="message">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line line-short"></div>
        </div>
      </div>
    </div>
  );
};

export default PostPlaceholder;
