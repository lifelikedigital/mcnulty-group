import { openDrawer, closeDrawer } from './DrawerHandlers.js';

// Selectors
// Utility
let windowWidth = window.innerWidth;

// Triggers
const legacyAction = document.getElementById('treatments-action');
const coreAction = document.getElementById('treatments-action');

// Drawers
const legacyDrawer = document.getElementById('drawer-legacy');
const coreDrawer = document.getElementById('drawer-core');

// Close Buttons
const legacyClose = document.getElementById('close-legacy');
const coreClose = document.getElementById('close-core');

// Functions
const debounce = (func, delay = 200) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const triggerDrawer = (trigger, drawer, position = '0%', axis = 'x') => {
  if (!trigger || !drawer) {
    return;
  }

  const clickTrigger = debounce((e) => {
    openDrawer(drawer, position, axis);
    e.stopPropagation;
  });

  trigger.removeEventListener('click', clickTrigger);
};

const dismissDrawer = (drawer, closeButton) => {
  if (closeButton) {
    closeButton.addEventListener('click', (e) => {
      closeDrawer(drawer, '100%');
      e.stopPropagation();
    });
  }
  document.addEventListener('click', function (event) {
    if (
      drawer &&
      !drawer.contains(event.target) &&
      drawer.classList.contains('drawer--active')
    ) {
      if (window.matchMedia('(max-width: 1055px)').matches) {
        if (
          legacyDrawer.contains(event.target) ||
          coreDrawer.contains(event.target)
        ) {
          return;
        }
      }

      closeDrawer(drawer, '100%');
    }
  });
};

const resizeEvents = () => {
  window.addEventListener(
    'resize',
    debounce(() => {
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        // Close all menus
        [legacyDrawer, coreDrawer].forEach((menu) => {
          if (menu && menu.classList.contains('drawer--active')) {
            closeDrawer(menu, '100%');
          }
        });

        // Re-trigger drawers
        triggerDrawer(legacyAction, legacyDrawer);
        triggerDrawer(coreAction, coreDrawer);
      }
    })
  );
};

const Drawers = () => {
  triggerDrawer(legacyAction, legacyDrawer);
  dismissDrawer(legacyDrawer, legacyClose);
  triggerDrawer(coreAction, coreDrawer);
  dismissDrawer(coreDrawer, coreClose);

  resizeEvents();
};

export default Drawers;
