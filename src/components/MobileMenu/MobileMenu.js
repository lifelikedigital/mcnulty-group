const mobileMenuAction = document.getElementById('mobile-nav-action');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavClose = document.getElementById('mobile-nav-close');
const toggleMenu = () => {
  mobileNav.classList.toggle('visible-nav');
};

const MobileMenu = () => {
  mobileMenuAction.addEventListener('click', toggleMenu);
  mobileNavClose.addEventListener('click', () =>
    mobileNav.classList.remove('visible-nav')
  );
};

export default MobileMenu;
