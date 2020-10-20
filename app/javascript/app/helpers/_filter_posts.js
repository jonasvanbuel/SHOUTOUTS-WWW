const filterPosts = (taggedPosts, filtered, filter) => {
  if (filtered === true) {
    // Return posts that meet the filter requirements
    const regex = new RegExp(`${filter}`, 'gmi');
    const filteredPosts = taggedPosts.filter((post) => {
      return regex.test(post.author) === true || regex.test(post.message) === true;
    });
    return filteredPosts;
  }
  if (filtered === false) {
    return taggedPosts;
  }
};

export default filterPosts;
