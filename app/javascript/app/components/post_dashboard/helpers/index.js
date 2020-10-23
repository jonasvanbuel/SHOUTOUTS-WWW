// HELPERS - being imported elsewhere

export const fetchPost = (post) => {
  const element = document.getElementById(post.pathname);
  return element;
};

// export const fetchPostContent = (post) => {
//   const post = document.getElementById(post.pathname);
//   const postContent = post.getElementsByClassName('post-content')[0];
//   return postContent;
// };

export const fetchPostOptions = (post) => {
  const element = document.getElementById(post.pathname);
  const postOptions = element.getElementsByClassName('post-options')[0];
  return postOptions;
};

// export const fetchPostHidden = (post) => {
//   const post = document.getElementById(post.pathname);
//   const postHidden = post.getElementsByClassName('post-hidden')[0];
//   return postHidden;
// };

export const fetchPostHiddenOptions = (post) => {
  const element = document.getElementById(post.pathname);
  const postHiddenOptions = element.getElementsByClassName('post-hidden-options')[0];
  return postHiddenOptions;
};

export const fetchPostHiddenOverlay = (post) => {
  const element = document.getElementById(post.pathname);
  const postHiddenOverlay = element.getElementsByClassName('post-hidden-overlay')[0];
  return postHiddenOverlay;
};

export const hidePostOptions = (post) => {
  const postOptions = fetchPostOptions(post);
  if (!postOptions.classList.contains('invisible')) {
    postOptions.classList.add('invisible');
  }
};

// export const hidePostHidden = (post) => {
//   const postHidden = fetchPostHidden(post);
//   if (!postHidden.classList.contains('invisible')) {
//     postHidden.classList.add('invisible');
//   }
// };

// export const showPostHidden = (post) => {
//   const postHidden = fetchPostHidden(post);
//   if (postHidden.classList.contains('invisible')) {
//     postHidden.classList.remove('invisible');
//   }
// };

export const hidePostHiddenOptions = (post) => {
  const postHiddenOptions = fetchPostHiddenOptions(post);
  if (!postHiddenOptions.classList.contains('invisible')) {
    postHiddenOptions.classList.add('invisible');
  }
};

export const showPostHiddenOverlay = (post) => {
  const postHiddenOverlay = fetchPostHiddenOverlay(post);
  if (postHiddenOverlay.classList.contains('invisible')) {
    postHiddenOverlay.classList.remove('invisible');
  }
};

export const reviewScroll = () => {
  if (window.scrollY > 184) {
    window.scroll(0, 184);
  }
};




