const sortPosts = (taggedPosts, sortKey, sortOrder) => {
  let sortedPosts = taggedPosts;

  if (sortKey === 'posted') {
    if (sortOrder === 'asc') {
      function compare(a, b) {
        if (a.posted_at > b.posted_at) return 1;
        if (b.posted_at > a.posted_at) return -1;
        return 0;
      }
      // [...posts] spread operator creates copy like 'posts.slice()'
      sortedPosts = [...sortedPosts].sort(compare);
    }
    if (sortOrder === 'desc') {
      function compare(a, b) {
        if (a.posted_at > b.posted_at) return -1;
        if (b.posted_at > a.posted_at) return 1;
        return 0;
      }
      sortedPosts = [...sortedPosts].sort(compare);
    }
  }
  if (sortKey === 'likes') {
    if (sortOrder === 'asc') {
      function compare(a, b) {
        if (a.likes > b.likes) return 1;
        if (b.likes > a.likes) return -1;
        return 0;
      }
      sortedPosts = [...sortedPosts].sort(compare);
    }
    if (sortOrder === 'desc') {
      function compare(a, b) {
        if (a.likes > b.likes) return -1;
        if (b.likes > a.likes) return 1;
        return 0;
      }
      sortedPosts = [...sortedPosts].sort(compare);
    }
  }
  return sortedPosts;
};

export default sortPosts;
