import anime from 'animejs/lib/anime.es';

const PADDING = 20;
const OVERLAP_COEFF = 0.8;

const getRandomInt = (min, max) => {
  const diff = max - min;
  const randomDiff = Math.floor(Math.random() * diff);
  return min + randomDiff;
};

const checkRandomLocation = (post, size, randomLocation) => {
  const minDistanceX = Math.floor(post.offsetWidth * OVERLAP_COEFF);
  const minDistanceY = Math.floor(post.offsetHeight * OVERLAP_COEFF);

  const sameSizePosts = document.querySelectorAll('.post-small.location-assigned');

  if (sameSizePosts.length > 0) {
    let count = 0;
    for (const sameSizePost of sameSizePosts) {
      let distanceDiffX = Math.abs(randomLocation.left - parseInt(sameSizePost.style.left));
      let distanceDiffY = Math.abs(randomLocation.top - parseInt(sameSizePost.style.top));

      // Count tries to prevent stack overflow trying to repeatedly place the next post in new location
      // count += 1;
      // if (count >= 20) {
      //   return randomLocation;
      // }

      if (distanceDiffX < minDistanceX && distanceDiffY < minDistanceY) {
        return getRandomLocation(post, size);
      }
    }
  }
  return randomLocation;
};

const getRandomLocation = (post, size) => {
  const top = getRandomInt(
    -PADDING,
    window.innerHeight
  );
  const left = getRandomInt(
    -PADDING,
    window.innerWidth - (post.offsetWidth - PADDING)
  );
  return checkRandomLocation(post, size, { top, left });
};

const setInitialPosition = (post, size) => {
  const randomLocation = getRandomLocation(post, size);
  post.style.left = `${randomLocation.left}px`;
  post.style.top = `${randomLocation.top}px`;
  post.classList.add('location-assigned');
  return {
    top: randomLocation.top,
    left: randomLocation.left
  };
};

const firstAnimation = (post, initialPosition, totalDuration) => {
  let firstDistance = null;
  let firstDuration = null;

  if (initialPosition.top >= 0) {
    const totalDistance = window.innerHeight + post.offsetHeight + (PADDING * 2);
    firstDistance = initialPosition.top + post.offsetHeight + PADDING;
    const percent = firstDistance / totalDistance;
    firstDuration = Math.floor(totalDuration * percent);
  }

  anime({
    targets: post,
    top: -(post.offsetHeight + PADDING),
    duration: firstDuration,
    loop: false,
    easing: 'linear',
    complete: () => {
      secondAnimation(post, initialPosition, totalDuration);
    }
  });
};

const secondAnimation = (post, initialPosition, totalDuration) => {
  post.style.top = `${window.innerHeight + PADDING}px`;

  anime({
    targets: post,
    top: -(post.offsetHeight + PADDING),
    duration: totalDuration,
    loop: true,
    easing: 'linear'
  });
};

const initAnimation = (pathname) => {
  const post = document.getElementById(pathname);

  if (post.classList.contains('post-large')) {
    const totalDuration = getRandomInt(80000, 90000);
    const initialPosition = setInitialPosition(post, 'lg');
    firstAnimation(post, initialPosition, totalDuration);
  }
  if (post.classList.contains('post-small')) {
    const totalDuration = getRandomInt(40000, 45000);
    const initialPosition = setInitialPosition(post, 'sm');
    firstAnimation(post, initialPosition, totalDuration);
  }

};

export default initAnimation;
