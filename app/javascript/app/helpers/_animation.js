import anime from 'animejs/lib/anime.es';

const PADDING = 20;

const getRandomInt = (min, max) => {
  const diff = max - min;
  const randomDiff = Math.floor(Math.random() * diff);
  return min + randomDiff;
};

const setInitialPosition = (post) => {
  // If post-small
  const left = getRandomInt(
    -PADDING,
    window.innerWidth - (post.offsetWidth - PADDING)
  );
  const top = getRandomInt(
    -PADDING,
    window.innerHeight - (post.offsetHeight - PADDING)
  );

  // Check distance to other posts



  post.style.left = `${left}px`;
  post.style.top = `${top}px`;


  return {
    left,
    top
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
  console.log('Second animation triggered...');
  post.style.top = `${window.innerHeight + PADDING}px`;

  const totalDistance = window.innerHeight + post.offsetHeight + (PADDING * 2);

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
    const duration = getRandomInt(30000, 35000);
    const initialPosition = setInitialPosition(post);
    firstAnimation(post, initialPosition, duration);
  }
};

export default initAnimation;
