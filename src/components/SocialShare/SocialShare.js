// Global
// const $body = $('body');
const $window = $(window);
const $metaTitle = $("meta[property='og:title']");
const $metaDesc = $("meta[property='og:description']");

// URL + Metadata
const $currentPage = $(location).attr('href'); // for copying and emails
const $currentPageEncoded = encodeURIComponent($currentPage); // for share links

// Metadata
// const $currentPageTitle = $('h1').html();
// const $currentPageTitleEncoded = encodeURIComponent($currentPageTitle);
// const $currentPageSummary = $metaDesc.attr('content');
// const $currentPageSummary = $('#summary').html();
// const $currentPageSummaryEncoded = encodeURIComponent($currentPageSummary);

// Emails
// const emailSubject = ` ${$currentPageTitle}`;
// const emailBody = `Hey, I wanted to share this article with you on ${$currentPageTitle} from __________. You can check it out right here: ${$currentPage} – Let me know what you think!`;

// Share buttons
// const $shareBtnsContainer = $('.blog-post__share-btns');
const $facebookShareBtn = $('#facebook-share');
const $linkedInShareBtn = $('#linkedin-share');
// const $emailShareBtn = $('.blog-post__share-link--email');
const $copyShareBtn = $('#copy-link');
// const copyShareBtn = document.querySelector('#copy-link');

// Share links
const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${$currentPageEncoded}`;
const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${$currentPageEncoded}&title=${$metaTitle}&source=https%3A%2F%2Fcanvascannabis.ca%2F&summary=${$metaDesc}`;
// const emailShareLink = `mailto:?subject=${emailSubject}&body=${emailBody}`; // gmail on ios is tricky with mailto in general + clean up body variable and subject

// Pop-up window related
const windowWidth = $window.width();
const windowHeight = $window.height();
const windowLeft = windowWidth / 2 - 480 / 2;
const windowTop = windowHeight / 2 - 608 / 2;

const $shareMenuLaunch = $('#share-launch'); // 'share this page' button
const activeShareMenu = 'share-links--active'; // display block class
const $shareMenu = $('.share-links'); // what needs to be shown
const $getStarted = $('#get-started'); // get started btn

const activeGetStarted = 'start--active'; // toggle for get started btn

const activeSharePage = 'share--active'; // toggle for share page btn

// start--active
// share--active

// functions
const startSharing = () => {
  $shareMenuLaunch.on('click', (e) => {
    e.preventDefault();
    $shareMenu.toggleClass(activeShareMenu);
    $shareMenuLaunch.toggleClass(activeSharePage);
    $getStarted.toggleClass(activeGetStarted);
  });
};

const copyLink = () => {
  $copyShareBtn.on('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText($currentPage);
    const copyOriginal = $copyShareBtn.text();
    $copyShareBtn.text('Copied!');
    setTimeout(function () {
      $copyShareBtn.text(copyOriginal);
    }, 2000);
  });
};

const facebookShare = () => {
  $facebookShareBtn.on('click', (e) => {
    e.preventDefault();
    window.open(
      facebookShareLink,
      'popup',
      `menubar=no, toolbar=no, resizable=yes, scrollbars=yes, width=480, height=608, top=${windowTop}, left=${windowLeft}`
    );
  });
};

const linkedInShare = () => {
  $linkedInShareBtn.on('click', (e) => {
    e.preventDefault();
    window.open(
      linkedInShareLink,
      'popup',
      `menubar=no, toolbar=no, resizable=yes, scrollbars=yes, width=480, height=608, top=${windowTop}, left=${windowLeft}`
    );
  });
};

const SocialShare = () => {
  startSharing();
  copyLink();
  $facebookShareBtn.attr('href', facebookShareLink);
  facebookShare();
  $linkedInShareBtn.attr('href', linkedInShareLink);
  linkedInShare();
};

export default SocialShare;
