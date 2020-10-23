const filterPosts = (taggedPosts, filtered, filter) => {
  if (filtered === true) {
    // Return posts that meet the filter requirements
    let regex = new RegExp(`${filter}`, 'i');
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
