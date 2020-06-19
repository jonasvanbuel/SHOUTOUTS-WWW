const fetchPost = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  return post;
};

const initPostOptions = (taggedPost) => {
  let post = fetchPost(taggedPost);
  let postOptions = post.getElementsByClassName('post-options')[0];

  // Make post-options overlay visible on hover
  if (postOptions) {
    post.addEventListener('mouseenter', () => {
      postOptions.classList.toggle('invisible');
    });
    post.addEventListener('mouseleave', () => {
      // When user CLICKS on icon, to avoid making 'post_hidden' invisible upon 'mouseleave'
      post = fetchPost(taggedPost);
      const postHidden = post.getElementsByClassName('post-hidden')[0];
      if (!postHidden) {
        postOptions.classList.toggle('invisible');
      }
    });

    // Make option LABELS visible on hover
    const labels = postOptions.getElementsByClassName('symbol-label');
    for (const label of labels) {
      const symbol = label.parentElement.getElementsByClassName('fas')[0];
      symbol.addEventListener('mouseenter', () => {
        // When user CLICKS on icon, to avoid making label invisible upon 'mouseleave'
        post = fetchPost(taggedPost);
        const postHidden = post.getElementsByClassName('post-hidden')[0];
        if (!postHidden) {
          label.classList.toggle('invisible');
          label.parentElement.style.opacity = 1;;
        }
      });
      symbol.addEventListener('mouseleave', () => {
        // When user CLICKS on icon, to avoid making label invisible upon 'mouseleave'
        post = fetchPost(taggedPost);
        const postHidden = post.getElementsByClassName('post-hidden')[0];
        if (!postHidden) {
          label.classList.toggle('invisible');
        }
      });
    }
  }
};

export default initPostOptions;
