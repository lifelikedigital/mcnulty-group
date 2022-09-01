// prettier-ignore
import { $segmentationSubmit, btnLoading, $modalBtn, defaultModalBtn } from '../../Buttons/ButtonsLoadingState';
import gsap from 'gsap/all';

// Selectors
// Global
const $document = $(document);
const $html = $('html');
const $body = $('body');

// Modal
const $segmentationModal = $('.modal--shop'); // containing element
const $modalContainer = $('.modal__container');
const $segmentationForm = $('.modal__form--shop');
const $storeSelect = $('#shop-segmentation-select');
const $selectPlaceholder = $('#shop-segmentation-select > option:first-child');

const $modalHeader = $('#shop-segmentation-label');
const $modalBody = $('#choose-store-label');
const $modalDesc = $('#shop-segmentation-description');

const defaultModalHeader = $modalHeader.html();
const defaultModalBody = $modalBody.html();
const defaultModalDesc = $modalDesc.html();

// Buttons
const $navShop = $('.is--shop-trigger'); // nav 'shop' link
const $heroShop = $('#shop-now-btn'); // hero 'shop now'
const $dailySpecialsShop = $('#daily-specials-btn'); // daily specials/staff picks
const $shopFlower = $('#shop-flower-btn'); // shop flower
const $shopEdibles = $('#shop-edibles-btn'); // shop edibles
const $shopVaporizers = $('#shop-vaporizers-btn'); // shop vaporizers

const $escModal = $('#modal-esc'); // explicit modal esc

// Classes
const activeSegmentation = 'modal--active';
const disableScroll = 'active-modal';

// URL Parts
// const dutchieTopLevel = 'https://dutchie.com/embedded-menu'; // top-level

const dutchieTopLevel = '/cannabis-store-menu/'; // top-level revised

// Stores
// const danforth = 'canvas'; // danforth main
// const liberty = 'canvas-liberty'; // liberty main
// const mountDennis = 'canvas-weston'; // mount dennis main

const danforth = 'danforth-dispensary?dtche%5B'; // danforth main revised
const liberty = 'liberty-village-dispensary?dtche%5B'; // liberty main revised
const mountDennis = 'mount-dennis-dispensary?dtche%5B'; // mount dennis main revised
const harbord = 'harbord-village-dispensary?dtche%5B'; // harbord village

// Destinations
// const specials = 'specials'; // specials category
// const flower = 'flower'; // flower category
// const edibles = 'edibles'; // edibles category
// const vaporizers = 'vaporizers'; // vaporizers category

const specials = 'path%5D=specials'; // specials category revised
const flower = 'category%5D=flower'; // flower category revised
const edibles = 'category%5D=edibles'; // edibles category revised
const vaporizers = 'category%5D=vaporizers'; // vaporizers category revised
const privateCollection =
  'search%5D=private+collection&dtche%5Bcategory%5D=all'; // private collection search results

// URL Variables
let main = false;
let store;
let products = false;
let destination;

// Functions
const pathConstructor = (main, store, products, destination) => {
  if (main) {
    // convert to switch-case?
    // return `${dutchieTopLevel}/${store}`;
    return `${dutchieTopLevel}${store}`; // revised
  } else if (!products) {
    // return `${dutchieTopLevel}/${store}/${destination}`;
    return `${dutchieTopLevel}${store}${destination}`; // revised
  } else if (products) {
    // return `${dutchieTopLevel}/${store}/products/${destination}`; // put products in a constant?
    return `${dutchieTopLevel}${store}${destination}`; // revised
  }
};

// See if I can make these functions more dynamic and import them between nav component and here
// Esc key to close modal
const escClose = () => {
  $document.keyup((e) => {
    const escKey = 27;
    if (
      $segmentationModal.hasClass(activeSegmentation) &&
      e.keyCode === escKey
    ) {
      // resets the url variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      $segmentationModal.removeClass(activeSegmentation);
      $html.removeClass(disableScroll);
      $body.removeClass(disableScroll);
      // resets the modals dynamic element values
      $modalHeader.html(defaultModalHeader);
      $modalBody.html(defaultModalBody);
      $modalBtn.html(defaultModalBtn);
      $modalDesc.html(defaultModalDesc);
    }
  });
};

// Clicking away from modal to close
const clickAwayClose = () => {
  $document.on('click', (e) => {
    const $target = $(e.target);
    if (
      // clicking away from the modal when modal is active
      !$target.closest($modalContainer).length &&
      !$target.closest($navShop).length &&
      !$target.closest($heroShop).length &&
      !$target.closest($dailySpecialsShop).length &&
      !$target.closest($shopFlower).length &&
      !$target.closest($shopEdibles).length &&
      !$target.closest($shopVaporizers).length &&
      !$target.closest($escModal).length && // this may be buggy
      $segmentationModal.hasClass(activeSegmentation)
    ) {
      // resets the url variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      $segmentationModal.removeClass(activeSegmentation);
      $html.removeClass(disableScroll);
      $body.removeClass(disableScroll);
      // resets the modals dynamic element values
      $modalHeader.html(defaultModalHeader);
      $modalBody.html(defaultModalBody);
      $modalBtn.html(defaultModalBtn);
      $modalDesc.html(defaultModalDesc);
    } else if (
      // clicking the modal when its active
      $target.closest($modalContainer).length &&
      $segmentationModal.hasClass(activeSegmentation)
    ) {
      return;
    } else if (!$segmentationModal.hasClass(activeSegmentation)) {
      // if the modal isn't engaged, don't listen for or do anything
      return;
    }
  });
};

// Click explicit esc to close
const explicitEsc = () => {
  $escModal.on('click', function () {
    if ($segmentationModal.hasClass(activeSegmentation)) {
      // resets the url variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      $segmentationModal.removeClass(activeSegmentation);
      $html.removeClass(disableScroll);
      $body.removeClass(disableScroll);
      // resets the modals dynamic element values
      $modalHeader.html(defaultModalHeader);
      $modalBody.html(defaultModalBody);
      $modalBtn.html(defaultModalBtn);
      $modalDesc.html(defaultModalDesc);
    }
  });
};

const closeModalHandler = () => {
  escClose();
  clickAwayClose();
  explicitEsc();
};

const ShopSegmentation = () => {
  // Create a placeholder value in the select field
  // prettier-ignore
  $selectPlaceholder.attr({
    // prettier-ignore
    'selected': 'selected',
    // prettier-ignore
    'disabled': 'disabled',
  });
  $heroShop.on('click', function () {
    // launch the modal – convert into it's own function
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr – try the alternative to 'this' from the docs
    const dataVal = $(this).data('menu');
    // construct part of the url – turn this into it's own function and switch-case?
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      products = true; // is this right?
      destination = flower;
    } else if (dataVal === 'edibles') {
      products = true;
      destination = edibles;
    } else if (dataVal === 'vaporizers') {
      products = true;
      destination = vaporizers;
    }
  });
  $navShop.on('click', function () {
    // launch the modal – convert into it's own function
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // check if currently on a menu page
    if (window.location.href.indexOf('cannabis-store-menu') > -1) {
      // remove the current menu from the select options
      if (window.location.href.indexOf('danforth') > -1) {
        $("#shop-segmentation-select option[value='danforth']").remove();
      } else if (window.location.href.indexOf('liberty-village') > -1) {
        $("#shop-segmentation-select option[value='liberty']").remove();
      } else if (window.location.href.indexOf('mount-dennis') > -1) {
        $("#shop-segmentation-select option[value='mount-dennis']").remove();
      } else if (window.location.href.indexOf('harbord-village') > -1) {
        $("#shop-segmentation-select option[value='harbord']").remove();
      }
      // change the header text
      $modalHeader.html('Please select another cannabis store location below');
      // change the body text
      $modalBody.html(
        'Choose from one of our other Toronto dispensary locations to switch menus:'
      );
      // change the button text
      $modalBtn.html('Switch Menus');
      // change the description
      $modalDesc.html(
        'Choose another local Canvas Cannabis Toronto dispensary from the field above to be taken to its menu for click and collect or cannabis delivery.'
      );
    }
    // capture value of data attr – try the alternative to 'this' from the docs
    const dataVal = $(this).data('menu');
    // construct part of the url – turn this into it's own function and switch-case?
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
    } else if (dataVal === 'edibles') {
      destination = edibles;
    } else if (dataVal === 'vaporizers') {
      destination = vaporizers;
    }
  });
  $dailySpecialsShop.on('click', function () {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    // launch the modal – convert into it's own function
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // change the body text
    $modalBody.html(
      currentDay === 0 || currentDay === 6 || currentDay === 5
        ? `Choose from our Toronto dispensary locations to begin shopping our private collection:`
        : `Choose from our Toronto dispensary locations to begin shopping today's specials:`
    );
    // change the button text
    $modalBtn.html(
      currentDay === 0 || currentDay === 6 || currentDay === 5
        ? `Go to Collection`
        : `Go to Specials`
    );
    // change the description
    $modalDesc.html(
      currentDay === 0 || currentDay === 6 || currentDay === 5
        ? `Choose your local Canvas Cannabis Toronto dispensary from the field above to be taken to its private collection sub-menu for click and collect or cannabis delivery.`
        : `Choose your local Canvas Cannabis Toronto dispensary from the field above to be taken to its specials sub-menu for click and collect or cannabis delivery.`
    );
    // capture value of data attr – try the alternative to 'this' from the docs
    const dataVal = $(this).data('menu');
    // construct part of the url – turn this into it's own function and switch-case?
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination =
        currentDay === 0 || currentDay === 6 || currentDay === 5
          ? privateCollection
          : specials;
    } else if (dataVal === 'flower') {
      destination = flower;
    } else if (dataVal === 'edibles') {
      destination = edibles;
    } else if (dataVal === 'vaporizers') {
      destination = vaporizers;
    }
  });
  $shopFlower.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // change the body text
    $modalBody.html(
      'Choose from our Toronto dispensary locations to begin shopping for cannabis flower:'
    );
    // change the button text
    $modalBtn.html('Go to Flower');
    // change the description
    $modalDesc.html(
      'Choose your local Canvas Cannabis Toronto dispensary from the field above to be taken to its flower sub-menu for click and collect or cannabis delivery.'
    );
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      destination = edibles;
      products = true;
    } else if (dataVal === 'vaporizers') {
      destination = vaporizers;
      products = true;
    }
  });
  $shopEdibles.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // change the body text
    $modalBody.html(
      'Choose from our Toronto dispensary locations to begin shopping for cannabis edibles:'
    );
    // change the button text
    $modalBtn.html('Go to Edibles');
    // change the description
    $modalDesc.html(
      'Choose your local Canvas Cannabis Toronto dispensary from the field above to be taken to its edibles sub-menu for click and collect or cannabis delivery.'
    );
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      destination = edibles;
      products = true;
    } else if (dataVal === 'vaporizers') {
      destination = vaporizers;
      products = true;
    }
  });
  $shopVaporizers.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // change the body text
    $modalBody.html(
      'Choose from our Toronto dispensary locations to begin shopping for cannabis vaporizers:'
    );
    // change the button text
    $modalBtn.html('Go to Vapes');
    // change the description
    $modalDesc.html(
      'Choose your local Canvas Cannabis Toronto dispensary from the field above to be taken to its vaporizers sub-menu for click and collect or cannabis delivery.'
    );
    // construct part of the url
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      destination = edibles;
      products = true;
    } else if (dataVal === 'vaporizers') {
      destination = vaporizers;
      products = true;
    }
  });
  $segmentationForm.submit(function (e) {
    e.preventDefault();
    // waiting animation
    $segmentationSubmit.toggleClass(btnLoading);
    // construct the path
    const $selectedStore = $storeSelect.val();
    // move this into it's own function?
    if ($selectedStore === 'danforth') {
      // put these store strings in constants?
      store = danforth;
      const fullPath = pathConstructor(main, store, products, destination);
      // window.open(fullPath); // new window
      window.location.href = fullPath; // same window
      // reset URL variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      // destroy the modal – convert into it's own function
      // $segmentationModal.removeClass(activeSegmentation);
      // $html.removeClass(disableScroll);
      // $body.removeClass(disableScroll);
    } else if ($selectedStore === 'liberty') {
      store = liberty;
      const fullPath = pathConstructor(main, store, products, destination);
      // window.open(fullPath); // new window
      window.location.href = fullPath; // same window
      // reset URL variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      // destroy the modal – convert into it's own function
      // $segmentationModal.removeClass(activeSegmentation);
      // $html.removeClass(disableScroll);
      // $body.removeClass(disableScroll);
    } else if ($selectedStore === 'mount-dennis') {
      store = mountDennis;
      const fullPath = pathConstructor(main, store, products, destination);
      // window.open(fullPath); // new window
      window.location.href = fullPath; // same window
      // reset URL variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      // destroy the modal – convert into it's own function
      // $segmentationModal.removeClass(activeSegmentation);
      // $html.removeClass(disableScroll);
      // $body.removeClass(disableScroll);
    } else if ($selectedStore === 'harbord') {
      store = harbord;
      const fullPath = pathConstructor(main, store, products, destination);
      // window.open(fullPath); // new window
      window.location.href = fullPath; // same window
      // reset URL variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      // destroy the modal – convert into it's own function
      // $segmentationModal.removeClass(activeSegmentation);
      // $html.removeClass(disableScroll);
      // $body.removeClass(disableScroll);
    }
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        $segmentationSubmit.removeClass(btnLoading); // was toggleClass
        $segmentationModal.removeClass(activeSegmentation);
        $html.removeClass(disableScroll);
        $body.removeClass(disableScroll);
        // resets the modals dynamic element values
        $modalHeader.html(defaultModalHeader);
        $modalBody.html(defaultModalBody);
        $modalBtn.html(defaultModalBtn);
        $modalDesc.html(defaultModalDesc);
      }
    });
  });
  closeModalHandler();
};

export default ShopSegmentation;
