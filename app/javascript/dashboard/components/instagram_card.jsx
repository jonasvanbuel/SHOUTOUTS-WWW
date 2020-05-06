import React from 'react';

import InstaLike from 'images/insta-like.png';
import InstaComment from 'images/insta-comment.png';
import InstaShare from 'images/insta-share.png';

const InstagramCard = ({ taggedPost }) => {
  function timeDiffToString(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const timeDiff = Date.now() - dateTime;

    // date if over 1 week
    if (timeDiff > 604800000) {
      const monthsArray = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
      ];
      const month = monthsArray[dateTime.getMonth()];
      const day = dateTime.getDate();
      return `${day} ${month.toUpperCase()}`;
    }
    // number of days
    if (timeDiff >= 86400000) {
      return '### of days';
    }
    // number of hours
    if (timeDiff >= 3600000) {
      return '### of hours';
    }
    // number of mins
    if (timeDiff >= 60000) {
      return '### of mins';
    }
    // number of secs
    if (timeDiff >= 1000) {
      return '### of secs';
    }
    return null;
  }

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
        {`${taggedPost.message.slice(0, 140)} ...`}
      </div>

      <div className="time">
        {timeDiffToString(taggedPost.posted_at)}
      </div>
    </div>
  );
};

export default InstagramCard;
