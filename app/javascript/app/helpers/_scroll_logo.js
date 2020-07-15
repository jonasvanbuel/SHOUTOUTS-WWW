const scrollCallback = () => {
  const logo = document.querySelector('.navbar-logo');
  const logoRect = logo.getBoundingClientRect();
  const navbar = document.querySelector('.navbar');
  const navbarRect = navbar.getBoundingClientRect();
  const menu = document.querySelector('.menu');
  const menuRect = menu.getBoundingClientRect();
  const filterBar = document.querySelector('.filter-bar');
  const filterBarRect = filterBar.getBoundingClientRect();

  const initialPosition = filterBarRect.left;
  const scrolledPosition = menuRect.right - logoRect.width;
  const scrollDistance = navbarRect.height;
  const horizontalDistance = initialPosition - scrolledPosition;

  function evaluatePosition() {
    if (window.scrollY === 0) {
      console.log('scrollY: 0');
      return Math.floor(initialPosition);
    }
    if (window.scrollY >= scrollDistance) {
      console.log(`scrollY: ${scrolledPosition}`);
      return Math.floor(scrolledPosition);
    }
    const scrollProportion = window.scrollY / scrollDistance;
    return Math.floor(initialPosition - (horizontalDistance * scrollProportion));
  }

  logo.style.left = `${evaluatePosition()}px`;
};

const resizeCallback = () => {
  window.removeEventListener('scroll', scrollCallback);
  scrollLogo();
};

const scrollLogo = () => {
  const body = document.querySelector('body');
  body.addEventListener('resize', resizeCallback);

  window.addEventListener('DOMContentLoaded', scrollCallback);
  window.addEventListener('scroll', scrollCallback);
  window.addEventListener('resize', resizeCallback);
};

export default scrollLogo;
