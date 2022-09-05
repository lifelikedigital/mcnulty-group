const $shareMenuLaunch = $('#share-launch'); // 'share this page' button
const activeShareMenu = 'share-links--active'; // display block class
const $shareMenu = $('.share-links'); // what needs to be shown
const $getStarted = $('#get-started'); // get started btn

const activeGetStarted = 'start--active'; // toggle for get started btn

const activeSharePage = 'share--active'; // toggle for share page btn

// start--active
// share--active

// functions
const shareThisPage = () => {
  $shareMenuLaunch.on('click', (e) => {
    e.preventDefault();
    $shareMenu.toggleClass(activeShareMenu);
    $shareMenuLaunch.toggleClass(activeShareMenu);
    $getStarted.toggleClass(activeGetStarted);
  });
};

const SocialShare = () => {
  shareThisPage();
};

export default SocialShare;
