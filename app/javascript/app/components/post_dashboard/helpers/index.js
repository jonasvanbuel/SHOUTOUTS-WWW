// HELPERS - being imported elsewhere

export const fetchPost = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  return post;
};

export const fetchPostOptions = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postOptions = post.getElementsByClassName('post-options')[0];
  return postOptions;
};

export const fetchPostHidden = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postHidden = post.getElementsByClassName('post-hidden')[0];
  return postHidden;
};

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



export const animateLabels = (taggedPost) => {
  const postOptions = fetchPostOptions(taggedPost);
  const postHiddenOptions = fetchPostHiddenOptions(taggedPost);

  const targettedElements = [postOptions, postHiddenOptions];

  targettedElements.forEach((element) => {
    const labels = element.getElementsByClassName('symbol-label');
    for (const label of labels) {
      const symbol = label.parentElement.getElementsByClassName('fas')[0];
      symbol.addEventListener('mouseenter', () => {
        if (label.classList.contains('invisible')) {
          label.classList.remove('invisible');
        }
      });
      symbol.addEventListener('mouseleave', () => {
        if (!label.classList.contains('invisible')) {
          label.classList.add('invisible');
        }
      });
    }
  });
};

// export const animatePostOptions = (taggedPost) => {
//   const post = fetchPost(taggedPost);

//   // MOUSE-ENTER
//   post.addEventListener('mouseenter', () => {
//     let postHidden = fetchPostHidden(taggedPost);
//     let postOptions = fetchPostOptions(taggedPost);

//     // If post is not hidden, show postOptions
//     if (!post.dataset.hidden && postOptions.classList.contains('invisible')) {
//       postOptions.classList.remove('invisible');
//     }

//     // If post is hidden, hide postHidden and show postHiddenOptions
//     if (post.dataset.hidden && !postHidden.classList.contains('invisible')) {
//       postHidden.classList.add('invisible');
//     }
//   });

//   // MOUSE-LEAVE
//   post.addEventListener('mouseleave', () => {
//     let postHidden = fetchPostHidden(taggedPost);
//     let postOptions = fetchPostOptions(taggedPost);

//     // If taggedPost is not hidden, hide postOptions
//     if (!post.dataset.hidden && !postOptions.classList.contains('invisible')) {
//       postOptions.classList.add('invisible');
//     }

//     // If taggedPost is hidden, show postHidden and hidden postHiddenOptions
//     if (post.dataset.hidden && postHidden.classList.contains('invisible')) {
//       postHidden.classList.remove('invisible');
//     }
//   });
// };

// const animatePost = (taggedPost) => {
//   const post = fetchPost(taggedPost);
//   const postOptions = fetchPostOptions(taggedPost);
//   const postHidden = fetchPostOptions(taggedPost);

//   if (post) {
//     animateLabels(taggedPost);
//   }
//   if (post && postOptions) {
//     animatePostOptions(taggedPost);
//   }
//   if (post && postHidden) {
//     // animatePostHidden();
//   }
// };

// export default animatePost;
