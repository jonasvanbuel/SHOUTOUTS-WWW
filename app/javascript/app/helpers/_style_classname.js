import { COUNT_CONFIG } from '../animation_livestream/_animation_config';

export const fetchStyleCategory = (post) => {
  const styleCategories = ['post-large', 'post-medium', 'post-small'];
  for (const category of styleCategories) {
    if (post.classList.contains(category)) {
      return category;
    }
  }
  return null;
};

const getSelectionType = (apiStyleClassname) => {
  return apiStyleClassname.slice(0, 2);
};

const getTypeNumber = (apiStyleClassname) => {
  const numberPattern = /\d+/g;
  return parseInt(apiStyleClassname.match(numberPattern)[0], 10);
};

const getStyleClassname = (selectionType, typeNumber) => {
  switch (selectionType) {
    case 'MR': {
      const largeNumberRef = COUNT_CONFIG.mr.post_large;
      const mediumNumberRef = COUNT_CONFIG.mr.post_large + COUNT_CONFIG.mr.post_medium;
      if (typeNumber <= largeNumberRef) {
        return 'post-large';
      }
      if (typeNumber <= mediumNumberRef) {
        return 'post-medium';
      }
      return 'post-small';
    }
    default:
      return 'hide';
  }
};

export const evaluateStyleClassname = (apiStyleClassname) => {
  const selectionType = getSelectionType(apiStyleClassname);
  const typeNumber = getTypeNumber(apiStyleClassname);
  const newStyleClassname = getStyleClassname(selectionType, typeNumber);
  return newStyleClassname;
};
