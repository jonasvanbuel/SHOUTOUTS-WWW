import anime from 'animejs/lib/anime.es';

import { LAYOUT_CONFIG } from './_animation_config';
import setRandomPosition from './_random_position';
import getRandomDuration from './_random_duration';

// import getRandomInt from '../helpers/_get_random_int';
import { fetchStyleCategory } from '../helpers/_style_classname';

const initAnimation = (post, initialPosition, totalDuration) => {
  let firstDistance = null;
  let firstDuration = null;

  if (initialPosition.top >= 0) {
    const totalDistance = window.innerHeight + post.offsetHeight + (LAYOUT_CONFIG.screen_padding * 2);
    firstDistance = initialPosition.top + post.offsetHeight + LAYOUT_CONFIG.screen_padding;
    const percent = firstDistance / totalDistance;
    firstDuration = Math.floor(totalDuration * percent);
  }

  anime({
    targets: post,
    top: -(post.offsetHeight + LAYOUT_CONFIG.screen_padding),
    duration: firstDuration,
    loop: false,
    easing: 'linear',
    complete: () => {
      secondAnimation(post, initialPosition, totalDuration);
    }
  });
};

const secondAnimation = (post, initialPosition, totalDuration) => {
  post.style.top = `${window.innerHeight + LAYOUT_CONFIG.screen_padding}px`;

  anime({
    targets: post,
    top: -(post.offsetHeight + LAYOUT_CONFIG.screen_padding),
    duration: totalDuration,
    loop: true,
    easing: 'linear'
  });
};

const animatePost = (pathname) => {
  const post = document.getElementById(pathname);
  const styleCategory = fetchStyleCategory(post);
  if (styleCategory) {
    const initialPosition = setRandomPosition(post, styleCategory);
    const totalDuration = getRandomDuration(styleCategory);
    initAnimation(post, initialPosition, totalDuration);
  }
};

export default animatePost;
