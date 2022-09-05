const $shareMenuLaunch = $('#share-launch'); // 'share this page' button
const activeShareMenu = '.share-links--active'; // display block class
const $shareMenu = $('.share-links'); // what needs to be shown

// functions
const shareThisPage = () => {
  $shareMenuLaunch.on('click', (e) => {
    e.preventDefault();
    $shareMenu.toggleClass(activeShareMenu);
  });
};

const SocialShare = () => {
  shareThisPage();
};

export default SocialShare;
