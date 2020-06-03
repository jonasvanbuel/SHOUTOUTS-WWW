import React from 'react';
import Truncate from 'react-truncate-html';

import InstaLike from 'images/insta-like.png';
import InstaComment from 'images/insta-comment.png';
import InstaShare from 'images/insta-share.png';

// Helpers
import timeDiffToString from '../helpers/time_helpers';

const InstagramCard = ({ taggedPost }) => {
  return (
    <div className="instagram-card">
      <div className="header">
        <img className="avatar" src={taggedPost.user_avatar_url} alt={taggedPost.author} />
        <div className="author">
          {taggedPost.author}
        </div>
      </div>

      <div className="img-container">
        <img src={taggedPost.image_url} alt={`${taggedPost.message.slice(0, 20)}...`} />
      </div>

      <div className="icon-container">
        <img src={InstaLike} className="icon" alt="" />
        <img src={InstaComment} className="icon" alt="" />
        <img src={InstaShare} className="icon" alt="" />
      </div>

      <div className="likes">
        {`${taggedPost.likes} likes`}
      </div>

      <div className="message">
        <span className="author">{taggedPost.author}</span>
        <span> </span>
        <Truncate
          lines={3}
          dangerouslySetInnerHTML={{
            __html: taggedPost.message
          }}
        />
      </div>

      <div className="time">
        {timeDiffToString(taggedPost.posted_at)}
      </div>
    </div>
  );
};

export default InstagramCard;
