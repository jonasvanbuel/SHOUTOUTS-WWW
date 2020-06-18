const initPostOptions = (taggedPost) => {
  const post = document.getElementById(taggedPost.pathname);
  const postOptions = post.getElementsByClassName('post-options')[0];

  // Make post-options overlay visible on hover
  if (postOptions) {
    post.addEventListener('mouseenter', () => {
      postOptions.classList.toggle('invisible');
    });
    post.addEventListener('mouseleave', () => {
      postOptions.classList.toggle('invisible');
    });

    // Make option labels visible on hover
    const labels = postOptions.getElementsByClassName('symbol-label');
    for (const label of labels) {
      const symbol = label.parentElement.getElementsByClassName('fas')[0];
      symbol.addEventListener('mouseenter', () => {
        label.classList.toggle('invisible');
        label.parentElement.style.opacity = 1;
      });
      symbol.addEventListener('mouseleave', () => {
        label.classList.toggle('invisible');
      });
    }
  }
};

export default initPostOptions;
