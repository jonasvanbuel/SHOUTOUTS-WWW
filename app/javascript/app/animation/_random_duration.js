import { DURATION_CONFIG } from './_animation_config';
import getRandomInt from '../helpers/_get_random_int';

const getRandomDuration = (styleCategory) => {
  switch (styleCategory) {
    case 'post-large':
      return getRandomInt(
        DURATION_CONFIG.post_large.duration_low,
        DURATION_CONFIG.post_large.duration_high
      );
    case 'post-medium':
      return getRandomInt(
        DURATION_CONFIG.post_medium.duration_low,
        DURATION_CONFIG.post_medium.duration_high
      );
    case 'post-small':
      return getRandomInt(
        DURATION_CONFIG.post_small.duration_low,
        DURATION_CONFIG.post_small.duration_high
      );
    default:
      return null;
  }
};

export default getRandomDuration;
