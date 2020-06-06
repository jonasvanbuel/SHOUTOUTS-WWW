const getRandomInt = (min, max) => {
  const diff = max - min;
  const randomDiff = Math.floor(Math.random() * diff);
  return min + randomDiff;
};

const setAnimation = (pathname) => {
  const post = document.getElementById(pathname);

  if (post.classList.contains('post-small')) {
    // Initial positioning
    const left = getRandomInt(-20, window.innerWidth - (post.offsetWidth - 20));
    const top = getRandomInt(-40, window.innerHeight - (post.offsetHeight - 40));
    post.style.left = `${left}px`;
    post.style.top = `${top}px`;

    // Animation
    const duration = getRandomInt(15, 20);
    post.style.animationDuration = `${duration}s`;
  }
};

export default setAnimation;
