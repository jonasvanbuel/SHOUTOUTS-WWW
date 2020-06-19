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

const animateLabels = (taggedPost) => {
  const post = fetchPost(taggedPost);
  const postOptions = fetchPostOptions(taggedPost);
  const postHidden = fetchPostHidden(taggedPost);

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
      };
    });
  }
};

const animatePostOptions = (taggedPost) => {
  const post = fetchPost(taggedPost);
  let postOptions = fetchPostOptions(taggedPost);
  let postHidden = fetchPostHidden(taggedPost);

  // If post is NOT hidden - SHOW postOptions
  post.addEventListener('mouseenter', () => {
    postOptions = fetchPostOptions(taggedPost);
    postHidden = fetchPostHidden(taggedPost);
    // If postHidden is disabled
    if (postHidden.classList.contains('invisible')) {
      // Show postOptions
      postOptions.classList.remove('invisible');
    }
  });

  // If post in NOT hidden - DISABLE postOptions
  post.addEventListener('mouseleave', () => {
    postOptions = fetchPostOptions(taggedPost);
    postHidden = fetchPostHidden(taggedPost);

    if (!postOptions.classList.contains('invisible')) {
      postOptions.classList.add('invisible');
    }
  });

  // Eventlistener for click on symbol
  // const hideSymbol = postOptions.getElementsByClassName('fa-eye-slash')[0];
  // hideSymbol.addEventListener('mousedown', () => {
  //   addInvisibleClassToElement(postOptions);
  // });
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
