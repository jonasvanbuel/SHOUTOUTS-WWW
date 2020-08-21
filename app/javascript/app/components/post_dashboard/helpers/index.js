// HELPERS - being imported elsewhere

export const fetchPost = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  return post;
};

// export const fetchPostContent = (taggedPost) => {
//   const post = document.getElementById(taggedPost.pathname);
//   const postContent = post.getElementsByClassName('post-content')[0];
//   return postContent;
// };

export const fetchPostOptions = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postOptions = post.getElementsByClassName('post-options')[0];
  return postOptions;
};

// export const fetchPostHidden = (taggedPost) => {
//   const post = document.getElementById(taggedPost.pathname);
//   const postHidden = post.getElementsByClassName('post-hidden')[0];
//   return postHidden;
// };

export const fetchPostHiddenOptions = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postHiddenOptions = post.getElementsByClassName('post-hidden-options')[0];
  return postHiddenOptions;
};

export const fetchPostHiddenOverlay = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postHiddenOverlay = post.getElementsByClassName('post-hidden-overlay')[0];
  return postHiddenOverlay;
};

export const hidePostOptions = (taggedPost) => {
  const postOptions = fetchPostOptions(taggedPost);
  if (!postOptions.classList.contains('invisible')) {
    postOptions.classList.add('invisible');
  }
};

// export const hidePostHidden = (taggedPost) => {
//   const postHidden = fetchPostHidden(taggedPost);
//   if (!postHidden.classList.contains('invisible')) {
//     postHidden.classList.add('invisible');
//   }
// };

// export const showPostHidden = (taggedPost) => {
//   const postHidden = fetchPostHidden(taggedPost);
//   if (postHidden.classList.contains('invisible')) {
//     postHidden.classList.remove('invisible');
//   }
// };

export const hidePostHiddenOptions = (taggedPost) => {
  const postHiddenOptions = fetchPostHiddenOptions(taggedPost);
  if (!postHiddenOptions.classList.contains('invisible')) {
    postHiddenOptions.classList.add('invisible');
  }
};

export const showPostHiddenOverlay = (taggedPost) => {
  const postHiddenOverlay = fetchPostHiddenOverlay(taggedPost);
  if (postHiddenOverlay.classList.contains('invisible')) {
    postHiddenOverlay.classList.remove('invisible');
  }
};

export const reviewScroll = () => {
  if (window.scrollY > 184) {
    window.scroll(0, 184);
  }
};




