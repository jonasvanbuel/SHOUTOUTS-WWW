import { fetchPost, fetchPostHiddenOptions, fetchPostHiddenOverlay } from '.';

const animatePostHiddenOptions = (taggedPost) => {
  let post = fetchPost(taggedPost);
  let postHiddenOptions = fetchPostHiddenOptions(taggedPost);
  let postHiddenOverlay = fetchPostHiddenOverlay(taggedPost);

  // MOUSE-ENTER
  // Only if post is hidden (and not triggered from center after hiding,)
  // show postHiddenOptions and hide postHiddenOverlay
  const onMouseEnterHandler = (event) => {
    post = fetchPost(taggedPost);
    postHiddenOptions = fetchPostHiddenOptions(taggedPost);
    postHiddenOverlay = fetchPostHiddenOverlay(taggedPost);

    if (post.dataset.hidden === 'true' || !postHiddenOverlay.classList.contains('invisible')) {
      // Show postHiddenOptions
      if (postHiddenOptions.classList.contains('invisible')) {
        postHiddenOptions.classList.remove('invisible');
      }
      // Hide postHiddenOverlay
      if (!postHiddenOverlay.classList.contains('invisible')) {
        postHiddenOverlay.classList.add('invisible');
      }
    }
  };


  // MOUSE-LEAVE
  // Regardless of whether post is hidden, hide postHiddenOptions
  // Only if taggedPost is hidden, show postHiddenOverlay
  const onMouseLeaveHandler = () => {
    post = fetchPost(taggedPost);
    postHiddenOptions = fetchPostHiddenOptions(taggedPost);
    postHiddenOverlay = fetchPostHiddenOverlay(taggedPost);

    if (!postHiddenOptions.classList.contains('invisible')) {
      postHiddenOptions.classList.add('invisible');
    }

    if (post.dataset.hidden === 'true') {
      postHiddenOverlay.classList.remove('invisible');
    }
  };

  if (postHiddenOptions) {
    post.addEventListener('mouseenter', onMouseEnterHandler);
    post.addEventListener('mouseleave', onMouseLeaveHandler);
  }
};

export default animatePostHiddenOptions;

