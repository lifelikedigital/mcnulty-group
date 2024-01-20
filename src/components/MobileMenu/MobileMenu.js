const mobileMenuAction = document.getElementById('mobile-nav-action');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavClose = document.getElementById('mobile-nav-close');
const onPageLinks = mobileNav.querySelectorAll('a.on-page');

const toggleMenu = () => {
  mobileNav.classList.toggle('visible-nav');
  document.body.classList.toggle('no-scroll');
};

const MobileMenu = () => {
  mobileMenuAction.addEventListener('click', toggleMenu);
  mobileNavClose.addEventListener('click', () => {
    mobileNav.classList.remove('visible-nav');
    document.body.classList.remove('no-scroll');
  });

  onPageLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('visible-nav');
      document.body.classList.remove('no-scroll');
    });
  });
};

export default MobileMenu;
