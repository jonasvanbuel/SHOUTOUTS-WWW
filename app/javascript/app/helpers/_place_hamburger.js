const placeHamburger = () => {
  const hamburger = document.querySelector('.fa-bars');
  const menu = document.querySelector('.menu');
  const menuRect = menu.getBoundingClientRect();

  hamburger.style.left = `${menuRect.left - 50}px`;
};

export default placeHamburger;
