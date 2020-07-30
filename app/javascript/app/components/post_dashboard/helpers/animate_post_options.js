import { fetchPost, fetchPostOptions } from '.';

const animatePostOptions = (taggedPost) => {
  let post = fetchPost(taggedPost);
  const postOptions = fetchPostOptions(taggedPost);

  // MOUSE-ENTER
  // Only if post is NOT hidden, show postOptions
  const onMouseEnterHandler = (event) => {
    post = fetchPost(taggedPost);
    if (post.dataset.hidden === 'false' && postOptions.classList.contains('invisible')) {
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

  // post.removeEventListener('mouseenter', onMouseEnterHandler);
  // post.removeEventListener('mouseleave', onMouseLeaveHandler);

  if (post && postOptions) {
    post.addEventListener('mouseenter', onMouseEnterHandler);
    post.addEventListener('mouseleave', onMouseLeaveHandler);
  }
}

export default animatePostOptions;
