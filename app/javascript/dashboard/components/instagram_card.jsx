import React from 'react';

import InstaLike from 'images/insta-like.png';
import InstaComment from 'images/insta-comment.png';
import InstaShare from 'images/insta-share.png';

const InstagramCard = ({ taggedPost }) => {
  function postedAtToString(dateTimeString) {
    const dateTimeMilliseconds = Date.parse(dateTimeString);
    let timeNow = Date.now();
    console.log(dateTimeMilliseconds);
    console.log(timeNow);
  }

  return (
    <div className="instagram-card">
      <div className="header">
        <div className="avatar" />
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
        {`${taggedPost.message.slice(0, 140)} ...`}
      </div>

      <div className="time">
        {postedAtToString(taggedPost.posted_at)}
      </div>

    </div>
  );
};

export default InstagramCard;
