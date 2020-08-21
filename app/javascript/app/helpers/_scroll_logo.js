const LOGO_RECT_PRESET_PROPORTIONS = {
  height: 184,
  width: 769.2
};
const FILTER_BAR_PADDING_LEFT = 6;

const scrollCallback = () => {
  const logo = document.querySelector('.logo-container');
  const logoRect = logo.getBoundingClientRect();
  const navbar = document.querySelector('.navbar');
  const navbarRect = navbar.getBoundingClientRect();
  const menu = document.querySelector('.menu');
  const menuRect = menu.getBoundingClientRect();
  const filterBar = document.querySelector('.filter-bar');
  const filterBarRect = filterBar.getBoundingClientRect();

  // Can't evaluate logoRect upon DOMContentLoaded - takes some time to render svg?
  // Calculate logoPaddingLeft with navbarRect.Height

  const logoRectWidth = (navbarRect.height * LOGO_RECT_PRESET_PROPORTIONS.width) / LOGO_RECT_PRESET_PROPORTIONS.height;
  const logoPaddingLeft = logoRectWidth / 3;
  // console.log(`logoRectWidth: ${logoRectWidth}`);
  // console.log(`logoPaddingLeft: ${logoPaddingLeft}`);

  // COORDINATES
  const initialPosition = filterBarRect.left + FILTER_BAR_PADDING_LEFT - logoPaddingLeft;
  const scrolledPosition = menuRect.left - logoPaddingLeft;
  // console.log(`initialPosition: ${initialPosition}px`);
  // console.log(`scrolledPosition: ${scrolledPosition}px`);

  const maxScrollDistance = navbarRect.height;
  const horizontalDistance = initialPosition - scrolledPosition;

  function evaluatePosition() {
    // console.log('evaluating position logo...');
    // console.log(`window.scrollY: ${window.scrollY}`);

    if (window.scrollY === 0) {
      return Math.floor(initialPosition);
    }
    if (window.scrollY >= maxScrollDistance) {
      return Math.floor(scrolledPosition);
    }
    const scrollProportion = window.scrollY / maxScrollDistance;
    // console.log(`evaluatedPosition: ${Math.floor(initialPosition - (horizontalDistance * scrollProportion))}`);
    return Math.floor(initialPosition - (horizontalDistance * scrollProportion));
  }

  logo.style.left = `${evaluatePosition()}px`;
};

const resizeCallback = () => {
  const body = document.querySelector('body');
  body.removeEventListener('resize', resizeCallback);
  window.removeEventListener('scroll', scrollCallback);
  window.removeEventListener('resize', resizeCallback);
  window.removeEventListener('DOMContentLoaded', scrollCallback);

  scrollLogo();
};

const scrollLogo = () => {
  const body = document.querySelector('body');
  body.addEventListener('resize', resizeCallback);

  // Delete eventListeners first...

  window.addEventListener('DOMContentLoaded', scrollCallback);
  window.addEventListener('scroll', scrollCallback);
  window.addEventListener('resize', resizeCallback);
};

export default scrollLogo;
