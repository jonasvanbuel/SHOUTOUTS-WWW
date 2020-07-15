const filterPosts = (taggedPosts, filtered, filter) => {
  console.log('filterPosts helper triggered from postList render...');
  console.log(`filtered: ${filtered}`);
  console.log(`filter: ${filter}`);

  if (filtered === true) {
    // Return posts that meet the filter requirements
    const filteredPosts = taggedPosts.filter((post) => {
      const regex = new RegExp(`${filter}`, 'i');
      return regex.test(post.author) === true || regex.test(post.message) === true;
    });
    return filteredPosts;
  }
  if (filtered === false) {
    return taggedPosts;
  }
};

export default filterPosts;
