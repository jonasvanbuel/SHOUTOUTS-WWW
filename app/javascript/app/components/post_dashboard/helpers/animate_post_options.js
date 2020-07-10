import { fetchPost, fetchPostOptions, fetchPostHidden } from '.';

const animatePostOptions = (taggedPost) => {
  const post = fetchPost(taggedPost);
  const postOptions = fetchPostOptions(taggedPost);
  const postHidden = fetchPostHidden(taggedPost);

  // MOUSE-ENTER
  // Only if post is NOT hidden, show postOptions
  const onMouseEnterHandler = (event) => {
    if (postHidden.classList.contains('invisible') && postOptions.classList.contains('invisible')) {
      postOptions.classList.remove('invisible');
    }
  };

  // MOUSE-LEAVE
  // Regardless of wether post is hidden, hide postOptions
  const onMouseLeaveHandler = (event) => {
    if (!postOptions.classList.contains('invisible')) {
      postOptions.classList.add('invisible');
    }
  };

  if (post && postOptions) {
    post.addEventListener('mouseenter', onMouseEnterHandler);
    post.addEventListener('mouseleave', onMouseLeaveHandler);
  }
};

export default animatePostOptions;
