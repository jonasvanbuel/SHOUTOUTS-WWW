import getRandomInt from '../helpers/_get_random_int';
import { LAYOUT_CONFIG } from './_animation_config';

const getMinDistance = (post, category) => {
  switch (category) {
    case 'post-large':
      return {
        x: Math.floor(post.offsetWidth * LAYOUT_CONFIG.post_large.overlap_coeff),
        y: Math.floor(post.offsetHeight * LAYOUT_CONFIG.post_large.overlap_coeff)
      };
    case 'post-medium':
      return {
        x: Math.floor(post.offsetWidth * LAYOUT_CONFIG.post_medium.overlap_coeff),
        y: Math.floor(post.offsetHeight * LAYOUT_CONFIG.post_medium.overlap_coeff)
      };
    case 'post-small':
      return {
        x: Math.floor(post.offsetWidth * LAYOUT_CONFIG.post_small.overlap_coeff),
        y: Math.floor(post.offsetHeight * LAYOUT_CONFIG.post_small.overlap_coeff)
      };
    default:
      return null;
  }
};

const checkRandomPosition = (post, category, randomLocation) => {
  const minDistance = getMinDistance(post, category);
  const sameSizePosts = document.querySelectorAll(`.${category}.location-assigned`);

  if (sameSizePosts.length > 0) {
    let count = 0;
    for (const sameSizePost of sameSizePosts) {
      const distanceDiffX = Math.abs(randomLocation.left - parseInt(sameSizePost.style.left));
      const distanceDiffY = Math.abs(randomLocation.top - parseInt(sameSizePost.style.top));

      // Count tries to prevent stack overflow - hard limit of X attempts to find
      // available initial location
      count += 1;
      if (count >= 30) {
        return randomLocation;
      }

      if (distanceDiffX < minDistance.x && distanceDiffY < minDistance.y) {
        return getRandomPosition(post, category);
      }
    }
  }
  return randomLocation;
};

const getRandomPosition = (post, category) => {
  const top = getRandomInt(
    -LAYOUT_CONFIG.screen_padding,
    window.innerHeight
  );
  const left = getRandomInt(
    -LAYOUT_CONFIG.screen_padding,
    window.innerWidth - (post.offsetWidth - LAYOUT_CONFIG.screen_padding)
  );
  return checkRandomPosition(post, category, { top, left });
};

const setRandomPosition = (post, category) => {
  const randomLocation = getRandomPosition(post, category);

  post.style.left = `${randomLocation.left}px`;
  post.style.top = `${randomLocation.top}px`;
  post.classList.add('location-assigned');
  return {
    top: randomLocation.top,
    left: randomLocation.left
  };
};

export default setRandomPosition;
