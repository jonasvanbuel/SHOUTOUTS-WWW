// const LOGO_RECT_PRESET_PROPORTIONS = {
//   height: 50.05,
//   width: 256
// };
const FILTER_BAR_PADDING_LEFT = 6;

const scrollCallback = () => {
  const logo = document.getElementById("logo-iframe");
  const logoRect = logo.getBoundingClientRect();
  const navbar = document.querySelector('.navbar');
  const navbarRect = navbar.getBoundingClientRect();
  const menu = document.querySelector('.menu');
  const menuRect = menu.getBoundingClientRect();
  const filterBar = document.querySelector('.filter-bar');
  const filterBarRect = filterBar.getBoundingClientRect();
  const container = document.querySelector('.custom-body-container');
  const containerRect = container.getBoundingClientRect();
  const containerMargin = (window.innerWidth - containerRect.width) / 2;

  // COORDINATES
  // Center position...
  // const initialPosition = (containerRect.width / 2) - (logoRect.width / 2);
  // Left alligned with search input...
  const initialPosition = filterBarRect.left - containerMargin + FILTER_BAR_PADDING_LEFT;

  const scrolledPosition = -(logoRect.width - menuRect.width);
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
