import anime from 'animejs/lib/anime.es';

const PADDING = 20;

const getRandomInt = (min, max) => {
  const diff = max - min;
  const randomDiff = Math.floor(Math.random() * diff);
  return min + randomDiff;
};

const checkRandomLocation = (post, size, randomLocation) => {
  const minDistanceX = Math.floor(post.offsetWidth * 0.8);
  const minDistanceY = Math.floor(post.offsetHeight * 0.8);

  const sameSizePosts = document.querySelectorAll('.post-small.location-assigned');

  if (sameSizePosts.length > 0) {
    for (const sameSizePost of sameSizePosts) {
      const distanceDiffX = Math.abs(randomLocation.left - parseInt(sameSizePost.style.left));
      const distanceDiffY = Math.abs(randomLocation.top - parseInt(sameSizePost.style.top));

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
    window.innerHeight - (post.offsetHeight - PADDING)
  );
  const left = getRandomInt(
    -PADDING,
    window.innerWidth - (post.offsetWidth - PADDING)
  );
  return checkRandomLocation(post, size, { top, left });
};

const setInitialPosition = (post, size) => {
  // If post-small
  if (size === 'sm') {
    const randomLocation = getRandomLocation(post, size);

    post.style.left = `${randomLocation.left}px`;
    post.style.top = `${randomLocation.top}px`;
    post.classList.add('location-assigned');

    return {
      top: randomLocation.top,
      left: randomLocation.left
    };
  }
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

  if (post.classList.contains('post-small')) {
    const totalDuration = getRandomInt(30000, 35000);
    const initialPosition = setInitialPosition(post, 'sm');
    firstAnimation(post, initialPosition, totalDuration);
  }
};

export default initAnimation;
