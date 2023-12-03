import { gsap } from 'gsap';

const popover = document.querySelector('.popover');
const activeDrawer = 'drawer--active';

const showPopover = () => {
  document.body.style.overflow = 'hidden';
  popover.style.display = 'block';
  gsap.to(popover, { opacity: 1, duration: 0.4 });
};

const hidePopover = () => {
  document.body.style.overflow = '';
  gsap.to(popover, {
    opacity: 0,
    duration: 0.4,
    onComplete: () => {
      popover.style.display = 'none';
    },
  });
};

export const openDrawer = (drawer, position = '0%', axis = 'x') => {
  showPopover();
  gsap.to(drawer, { [axis]: position, duration: 0.4, ease: 'power2.inOut' });

  drawer.classList.add(activeDrawer);
};

export const closeDrawer = (
  drawer,
  position = '-100%',
  includePopover = true,
  axis = 'x'
) => {
  if (includePopover) {
    hidePopover();
  }
  gsap.to(drawer, {
    [axis]: position,
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: () => {
      drawer.scrollTop = 0;
    },
  });
  drawer.classList.remove(activeDrawer);
};
