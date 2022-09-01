import { gsap } from 'gsap';

// Selectors
// Global
const $window = $(window);
const $document = $(document);
const $body = $('body');
const $html = $('html');

// Nav
const $mainNav = $('nav.main-nav'); // Nav element

// Hamburger Elements
const $hamburger = $('.main-nav__hamburger'); // Containing element
const $hamburgerTop = $('div.hamburger__top'); // Top bun
const $hamburgerBottom = $('div.hamburger__bottom'); // Bottom bun

// Links
const $linksList = $('.main-nav__links-list'); // Containing element
const $dropdownParent = $('.main-nav__links-item--dropdown'); // Links with dropdown navigation modifier
const $dropdownChildren = $('.links-item__container'); // Link and chevron container
const $dropdownIcon = $('.main-nav__dropdown-icon-bounding'); // Dropdown chevron icon
const $activeDropdownIcon = $('.main-nav__dropdown-icon-bounding--active'); // Active dropdown chevron icons
const $dropdownSubMenu = $('.main-nav__sub-menu'); // Containing element of sub-menu link lists

// Classes
const disableScroll = 'active-nav';
const activeMobileNav = 'main-nav__links-list--active';

// Unused
const mainNavActiveMobile = 'main-nav--active-mobile';
const navLogoActiveMobile = 'main-nav__logo--active-mobile';
const mainNavDark = 'main-nav--dark';
const hamburgerBunsActiveMobile = 'hamburger--active-mobile';
// Unused

const activeDropdownIcon = 'main-nav__dropdown-icon-bounding--active';
const activeSubMenu = 'main-nav__sub-menu--active';

// Other
const tabletBreakpoint = 991; // If the mobile menu is left open, growing the window beyond this width will trigger a menu close

// Match media variables
const mediaQuery = '(max-width: 991px)';
const mediaQueryList = window.matchMedia(mediaQuery);

// Functions
// Deals with showing and hiding the menu on smaller viewports
const mobileNavHandler = () => {
  $html.toggleClass(disableScroll);
  $body.toggleClass(disableScroll);
  // $linksList.toggleClass(activeMobileNav);
  if (!$linksList.hasClass(activeMobileNav)) {
    $linksList.addClass(activeMobileNav);
    if ($mainNav.hasClass('main-nav--dark-ui')) {
      gsap.to($mainNav, {
        duration: 0.25,
        backgroundColor: '#f2efed',
      });
    }
    gsap.to($hamburgerTop, { duration: 0.25, y: 7, rotationZ: 40 });
    gsap.to($hamburgerBottom, { duration: 0.25, y: -7, rotationZ: -40 });
  } else if ($linksList.hasClass(activeMobileNav)) {
    $linksList.removeClass(activeMobileNav);
    if ($mainNav.hasClass('main-nav--dark-ui')) {
      gsap.to($mainNav, {
        duration: 0.25,
        backgroundColor: 'transparent',
      });
    }
    gsap.to($hamburgerTop, { duration: 0.25, y: 0, rotationZ: 0 });
    gsap.to($hamburgerBottom, { duration: 0.25, y: 0, rotationZ: 0 });
  }
  // Collapsing open submenus
  if ($dropdownSubMenu.hasClass(activeSubMenu)) {
    $dropdownSubMenu.removeClass(activeSubMenu);
    if ($dropdownIcon.hasClass(activeDropdownIcon)) {
      $dropdownIcon.removeClass(activeDropdownIcon);
      gsap.to($dropdownIcon, { duration: 0.25, rotation: 0 }); // was 360
    }
  }
};

const subMenuHandler = () => {
  $dropdownChildren.on('click', function () {
    const $this = $(this);
    // Checking for any open sub-menus
    // prettier-ignore
    const $openSubMenus = $this.parent().siblings($dropdownParent); // Siblings that also have sub-menu functionality
    if ($openSubMenus.find($dropdownSubMenu).hasClass(activeSubMenu)) {
      // If there are other open sub-menus, collapse them
      $openSubMenus.find($dropdownSubMenu).removeClass(activeSubMenu);

      // prettier-ignore
      $openSubMenus.find($dropdownSubMenu).prev($dropdownChildren).find($dropdownIcon).removeClass(activeDropdownIcon);
      // prettier-ignore
      gsap.set($openSubMenus.find($dropdownSubMenu).prev($dropdownChildren).find($dropdownIcon), { transformOrigin: 'center' });
      // prettier-ignore
      gsap.fromTo($openSubMenus.find($dropdownSubMenu).prev($dropdownChildren).find($dropdownIcon), { duration: 0.25, rotation: 180}, { duration: 0.25, rotation: 0}); // was 360
    }

    $this.next().toggleClass(activeSubMenu); // Open the sub-menu corresponding with the clicked link

    gsap.to($this.next(), { duration: 0.25, opacity: 1 }); // sub-menu opacity

    // Deals with changes that happen when you click the same link to close its sub-menu
    // prettier-ignore
    if ($this.find($dropdownIcon).hasClass(activeDropdownIcon)) {
      $this.find($dropdownIcon).removeClass(activeDropdownIcon);
      gsap.set($this.find($dropdownIcon), { transformOrigin: 'center' });
      gsap.fromTo($this.find($dropdownIcon), { duration: 0.25, rotation: 180}, { duration: 0.25, rotation: 0,}); // was 360

      if ($window.width() > tabletBreakpoint && $mainNav.hasClass('main-nav--dark-ui')) {
        // gsap.to($dropdownIcon, { duration: 0.25, color: '#000000' });
        // gsap.to('.main-nav__logo-bounding', { duration: 0.25, color: '#000000' });
        // gsap.to('.main-nav__link', { duration: 0.25, color: '#000000' });
        gsap.to($mainNav, { duration: 0.25, backgroundColor: 'transparent' });

        gsap.to($this.next(), { duration: 0.25, opacity: 0 }); // sub-menu opacity
      }
      
    } else {
      $this.find($dropdownIcon).addClass(activeDropdownIcon);
      gsap.set($this.find($dropdownIcon), { transformOrigin: 'center' });
      gsap.fromTo($this.find($dropdownIcon), { duration: 0.25, rotation: 0}, { duration: 0.25, rotation: 180});
      
      if ($window.width() > tabletBreakpoint && $mainNav.hasClass('main-nav--dark-ui')) {
        gsap.to($mainNav, { duration: 0.25, backgroundColor: '#f2efed' });
        // gsap.to($dropdownIcon, { duration: 0.25, color: 'black' });
        // gsap.to('.main-nav__logo-bounding', { duration: 0.25, color: 'black' });
        // gsap.to('.main-nav__link', { duration: 0.25, color: 'black' });

        gsap.to($this.next(), { duration: 0.25, opacity: 1 }); // sub-menu opacity
      }
    }
  });
};

const closeMenuHandler = () => {
  // ESC key to close menu
  const escClose = () => {
    $document.keyup((e) => {
      const escKey = 27;
      if ($linksList.hasClass(activeMobileNav) && e.keyCode === escKey) {
        mobileNavHandler();
      } else if (
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        e.keyCode === escKey
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        if ($dropdownIcon.hasClass(activeDropdownIcon)) {
          $dropdownIcon.removeClass(activeDropdownIcon);
          gsap.to($dropdownIcon, { duration: 0.25, rotation: 0 }); // was 360
        }
        if ($mainNav.hasClass('main-nav--dark-ui')) {
          // gsap.to($dropdownIcon, { duration: 0.25, color: '#000000' });
          // gsap.to('.main-nav__logo-bounding', {
          //   duration: 0.25,
          //   color: '#000000',
          // });
          // gsap.to('.main-nav__link', { duration: 0.25, color: '#000000' });
          gsap.to($mainNav, {
            duration: 0.25,
            backgroundColor: 'transparent',
          });
        }
      }
    });
  };

  // Window resize to close menu
  const windowResizeClose = () => {
    // $window.on('resize', () => {
    //   if (
    //     $linksList.hasClass(activeMobileNav) &&
    //     $window.width() > tabletBreakpoint
    //   ) {
    //     mobileNavHandler();
    //   } else if (
    //     $dropdownSubMenu.hasClass(activeSubMenu) &&
    //     $window.width() <= tabletBreakpoint // Also collapses an open menu on orientation change
    //   ) {
    //     $dropdownSubMenu.removeClass(activeSubMenu);
    //     if ($dropdownIcon.hasClass(activeDropdownIcon)) {
    //       $dropdownIcon.removeClass(activeDropdownIcon);
    //       gsap.to($dropdownIcon, { duration: 0.25, rotation: 0 }); // was 360
    //     }

    //     // I think this is the problematic chunk of code?
    //     if ($mainNav.hasClass('main-nav--dark-ui')) {
    //       gsap.to($dropdownIcon, { duration: 0.25, color: 'black' });
    //       gsap.to('.main-nav__logo-bounding', {
    //         duration: 0.25,
    //         color: '#f2efed',
    //       });
    //       gsap.to('.main-nav__link', { duration: 0.25, color: 'black' });
    //       gsap.to($mainNav, {
    //         duration: 0.25,
    //         backgroundColor: 'transparent',
    //       });
    //     }

    //     // both of these branches deal with resetting leftover styles if the screen size changes even if the menu was not left open
    //   } else if (
    //     $window.width() > tabletBreakpoint &&
    //     $mainNav.hasClass('main-nav--dark-ui')
    //   ) {
    //     gsap.to($dropdownIcon, { duration: 0.25, color: '#f2efed' });
    //     gsap.to('.main-nav__link', { duration: 0.25, color: '#f2efed' });
    //   } else if ($window.width() < tabletBreakpoint) {
    //     gsap.to($dropdownIcon, { duration: 0.25, color: 'black' });
    //     gsap.to('.main-nav__link', { duration: 0.25, color: 'black' });
    //   }
    // });

    // Trying matchMedia instead
    mediaQueryList.addEventListener('change', (e) => {
      if ($linksList.hasClass(activeMobileNav) && !e.matches) {
        mobileNavHandler();
      } else if ($dropdownSubMenu.hasClass(activeSubMenu) && e.matches) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        if ($dropdownIcon.hasClass(activeDropdownIcon)) {
          $dropdownIcon.removeClass(activeDropdownIcon);
          gsap.to($dropdownIcon, { duration: 0.25, rotation: 0 }); // was 360
        }

        // I think this is the problematic chunk of code?
        if ($mainNav.hasClass('main-nav--dark-ui')) {
          // gsap.to($dropdownIcon, { duration: 0.25, color: 'black' });
          // gsap.to('.main-nav__logo-bounding', {
          //   duration: 0.25,
          //   color: '#000000',
          // });
          // gsap.to('.main-nav__link', { duration: 0.25, color: 'black' });
          gsap.to($mainNav, {
            duration: 0.25,
            backgroundColor: 'transparent',
          });
        }

        // both of these branches deal with resetting leftover styles if the screen size changes even if the menu was not left open
      } else if (!e.matches && $mainNav.hasClass('main-nav--dark-ui')) {
        // gsap.to($dropdownIcon, { duration: 0.25, color: '#000000' });
        // gsap.to('.main-nav__link', { duration: 0.25, color: '#000000' });
      } else if ($window.width() < tabletBreakpoint) {
        // gsap.to($dropdownIcon, { duration: 0.25, color: 'black' });
        // gsap.to('.main-nav__link', { duration: 0.25, color: 'black' });
      }
    });
  };

  // Clicking away from nav to close open sub-menus
  const clickAwayClose = () => {
    $document.on('click', (e) => {
      const $target = $(e.target);
      if (
        $window.width() > tabletBreakpoint &&
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        !$target.closest($mainNav).length
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        if ($dropdownIcon.hasClass(activeDropdownIcon)) {
          $dropdownIcon.removeClass(activeDropdownIcon);
          gsap.to($dropdownIcon, { duration: 0.25, rotation: 0 }); // was 360
        }
        if ($mainNav.hasClass('main-nav--dark-ui')) {
          // gsap.to($dropdownIcon, { duration: 0.25, color: '#000000' });
          // gsap.to('.main-nav__logo-bounding', {
          //   duration: 0.25,
          //   color: '#000000',
          // });
          // gsap.to('.main-nav__link', { duration: 0.25, color: '#000000' });
          gsap.to($mainNav, {
            duration: 0.25,
            backgroundColor: 'transparent',
          });
        }
      } else {
        return;
      }
    });
  };

  // Scroll away to close open sub-menus
  const scrollAwayClose = () => {
    let lastScroll = 0;
    $window.scroll(function () {
      let currentScroll = $window.scrollTop();
      if (currentScroll < 0) {
        return;
      }
      if (currentScroll === 0 && $dropdownSubMenu.hasClass(activeSubMenu)) {
        return;
      }
      if (
        currentScroll > lastScroll &&
        $dropdownSubMenu.hasClass(activeSubMenu)
      ) {
        // Scrolling down
        //prettier-ignore
        $dropdownSubMenu.removeClass(activeSubMenu);
        if ($dropdownIcon.hasClass(activeDropdownIcon)) {
          $dropdownIcon.removeClass(activeDropdownIcon);
          gsap.to($dropdownIcon, { duration: 0.25, rotation: 0 }); // was 360
        }
        if ($mainNav.hasClass('main-nav--dark-ui')) {
          // gsap.to($dropdownIcon, { duration: 0.25, color: '#000000' });
          // gsap.to('.main-nav__logo-bounding', {
          //   duration: 0.25,
          //   color: '#000000',
          // });
          // gsap.to('.main-nav__link', { duration: 0.25, color: '#000000' });
          gsap.to($mainNav, {
            duration: 0.25,
            backgroundColor: 'transparent',
          });
        }
        return;
      } else if (
        currentScroll < lastScroll &&
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        currentScroll === 0
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        if ($dropdownIcon.hasClass(activeDropdownIcon)) {
          $dropdownIcon.removeClass(activeDropdownIcon);
          gsap.to($dropdownIcon, { duration: 0.25, rotation: 0 }); // was 360
        }
        if ($mainNav.hasClass('main-nav--dark-ui')) {
          // gsap.to($dropdownIcon, { duration: 0.25, color: '#000000' });
          // gsap.to('.main-nav__logo-bounding', {
          //   duration: 0.25,
          //   color: '#000000',
          // });
          // gsap.to('.main-nav__link', { duration: 0.25, color: '#000000' });
          gsap.to($mainNav, {
            duration: 0.25,
            backgroundColor: 'transparent',
          });
        }
        return;
      }
      lastScroll = currentScroll;
    });
  };
  escClose();
  windowResizeClose();
  clickAwayClose();
  escClose();
  windowResizeClose();
  clickAwayClose();
  scrollAwayClose();
};

const Nav = () => {
  // Hamburger click handler
  $hamburger.on('click', () => {
    mobileNavHandler();
  });
  // Submenu functionality
  subMenuHandler();
  // Menu close functionalities
  closeMenuHandler();
};

export default Nav;
