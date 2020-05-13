import React from 'react';
import Truncate from 'react-truncate-html';

import InstaLike from 'images/insta-like.png';
import InstaComment from 'images/insta-comment.png';
import InstaShare from 'images/insta-share.png';

// TO DO: convert to Class

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
    if (timeDiff >= 86400000) {
      const days = timeDiff / 86400000;
      if (Math.floor(days) === 1) {
        return `${Math.floor(days)} day ago`;
      }
      return `${Math.floor(days)} days ago`;
    }
    if (timeDiff >= 3600000) {
      const hours = timeDiff / 3600000;
      if (Math.floor(hours) === 1) {
        return `${Math.floor(hours)} hour ago`;
      }
      return `${Math.floor(hours)} hours ago`;
    }
    if (timeDiff >= 60000) {
      const mins = timeDiff / 60000;
      if (Math.floor(mins) === 1) {
        return `${Math.floor(mins)} minute ago`;
      }
      return `${Math.floor(mins)} minutes ago`;
    }
    if (timeDiff >= 1000) {
      const mins = timeDiff / 1000;
      if (Math.floor(mins) === 1) {
        return `${Math.floor(mins)} second ago`;
      }
      return `${Math.floor(mins)} seconds ago`;
    }
    return null;
  }

  function parseHTML(string) {
    const div = document.createElement('div');
    div.innerHTML = string;
    return div;
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

// {`${taggedPost.message.slice(0, 140)} ...`}
