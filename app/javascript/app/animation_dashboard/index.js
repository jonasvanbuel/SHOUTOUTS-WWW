import { addInvisibleClassToElement } from './helpers';

const fetchPost = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  return post;
};

export const fetchPostOptions = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postOptions = post.getElementsByClassName('post-options')[0];
  return postOptions;
};

const fetchPostHidden = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postHidden = post.getElementsByClassName('post-hidden')[0];
  return postHidden;
};

const fetchPostHiddenOptions = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postHiddenOptions = post.getElementsByClassName('post-hidden-options')[0];
  return postHiddenOptions;
};

const animateLabels = (taggedPost) => {
  const post = fetchPost(taggedPost);
  // const postOptions = fetchPostOptions(taggedPost);
  // const postHidden = fetchPostHidden(taggedPost);
  // const postHiddenOptions = fetchPostHiddenOptions(taggedPost);

  const labels = post.getElementsByClassName('symbol-label');

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
};

const animatePostOptions = (taggedPost) => {
  const post = fetchPost(taggedPost);
  let postHidden = fetchPostHidden(taggedPost);
  let postOptions = fetchPostOptions(taggedPost);
  let postHiddenOptions = fetchPostHiddenOptions(taggedPost);

  // MOUSE-ENTER
  post.addEventListener('mouseenter', () => {
    postHidden = fetchPostHidden(taggedPost);
    postOptions = fetchPostOptions(taggedPost);
    postHiddenOptions = fetchPostHiddenOptions(taggedPost);

    // If taggedPost is not hidden, show postOptions
    if (!taggedPost.hidden && postOptions.classList.contains('invisible')) {
      postOptions.classList.remove('invisible');
    }

    // If taggedPost is hidden, hide postHidden and show postHiddenOptions
    if (taggedPost.hidden && !postHidden.classList.contains('invisible')) {
      postHidden.classList.add('invisible');
      postHiddenOptions.classList.remove('invisible');
    }
  });

  // MOUSE-LEAVE
  post.addEventListener('mouseleave', () => {
    postHidden = fetchPostHidden(taggedPost);
    postOptions = fetchPostOptions(taggedPost);
    postHiddenOptions = fetchPostHiddenOptions(taggedPost);

    // If taggedPost is not hidden, hide postOptions
    if (!taggedPost.hidden && !postOptions.classList.contains('invisible')) {
      postOptions.classList.add('invisible');
    }

    // If taggedPost is hidden, show postHidden and hidden postHiddenOptions
    if (taggedPost.hidden && postHidden.classList.contains('invisible')) {
      postHidden.classList.remove('invisible');
      postHiddenOptions.classList.add('invisible');
    }
  });
};

const animatePost = (taggedPost) => {
  const post = fetchPost(taggedPost);
  const postOptions = fetchPostOptions(taggedPost);
  const postHidden = fetchPostOptions(taggedPost);

  if (post) {
    animateLabels(taggedPost);
  }
  if (post && postOptions) {
    animatePostOptions(taggedPost);
  }
  if (post && postHidden) {
    // animatePostHidden();
  }
};

export default animatePost;
