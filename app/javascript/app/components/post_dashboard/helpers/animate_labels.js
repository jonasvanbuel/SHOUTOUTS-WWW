import { fetchPostOptions, fetchPostHiddenOptions } from '.';

const animateLabels = (taggedPost) => {
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

export default animateLabels;
