const timeDiffToString = (dateTimeString) => {
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
};

export default timeDiffToString;
