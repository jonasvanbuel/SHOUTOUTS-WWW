import { STYLE_SETTINGS } from '../animation/_animation_config';

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
      const largeNumberRef = STYLE_SETTINGS.mr.post_large;
      const mediumNumberRef = STYLE_SETTINGS.mr.post_large + STYLE_SETTINGS.mr.post_medium;
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

const evaluateStyleClassname = (apiStyleClassname) => {

  const selectionType = getSelectionType(apiStyleClassname);
  const typeNumber = getTypeNumber(apiStyleClassname);
  const newStyleClassname = getStyleClassname(selectionType, typeNumber);
  return newStyleClassname;
};

export default evaluateStyleClassname;
