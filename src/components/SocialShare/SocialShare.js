import 'tippy.js/animations/scale.css';
import tippy from 'tippy.js';

// Global
const $body = $('body');
const $window = $(window);
const $metaDesc = $('meta[name=description]');

// URL
const $currentPost = $(location).attr('href'); // for copying and emails
const $currentPostEncoded = encodeURIComponent($(location).attr('href')); // for share links

// Metadata
const $currentPostTitle = $('h1').html();
const $currentPostTitleEncoded = encodeURIComponent($('h1').html());
const $currentPostSummary = $metaDesc.attr('content');
const $currentPostSummaryEncoded = encodeURIComponent($currentPostSummary);

// Emails
const emailSubject = `Canvas Cannabis Blog: ${$currentPostTitle}`;
const emailBody = `Hey, I wanted to share this article with you on ${$currentPostTitle} from Canvas Cannabis. You can check it out right here: ${$currentPost} – Let me know what you think!`;

// Share buttons
const $shareBtnsContainer = $('.blog-post__share-btns');
const $facebookShareBtn = $('.blog-post__share-link--facebook');
const $linkedInShareBtn = $('.blog-post__share-link--linkedin');
const $emailShareBtn = $('.blog-post__share-link--email');
const $copyShareBtn = $('.blog-post__share-link--copy');
const copyShareBtn = document.querySelector('.blog-post__share-link--copy');

// Share links
const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${$currentPostEncoded}`;
const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${$currentPostEncoded}&title=${$currentPostTitleEncoded}&source=https%3A%2F%2Fcanvascannabis.ca%2F&summary=${$currentPostSummaryEncoded}`;
const emailShareLink = `mailto:?subject=${emailSubject}&body=${emailBody}`; // gmail on ios is tricky with mailto in general + clean up body variable and subject

// Pop-up window related
const windowWidth = $window.width();
const windowHeight = $window.height();
const windowLeft = windowWidth / 2 - 480 / 2;
const windowTop = windowHeight / 2 - 608 / 2;

// Functions
const copyLink = () => {
  $copyShareBtn.on('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText($currentPost);
  });
  // Tooltip confirmation
  tippy(copyShareBtn, {
    theme: 'canvas',
    allowHTML: true,
    content:
      '<span class="share__link--content">Copied</span> <img src="https://uploads-ssl.webflow.com/60cfd1175523ac59337574a3/61169089b056a46d4fb2924a_share__link--copied.svg" class="share__link--copied">',
    trigger: 'click',
    placement: 'right',
    offset: [0, 16], // skidding, distance
    animation: 'scale',
    duration: 250,
    inertia: 'true',
    arrow: false,
    hideOnClick: false,
    onShow(instance) {
      setTimeout(() => {
        instance.hide();
      }, 500);
    },
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
  $emailShareBtn.attr('href', emailShareLink);
  $facebookShareBtn.attr('href', facebookShareLink);
  facebookShare();
  $linkedInShareBtn.attr('href', linkedInShareLink);
  linkedInShare();
  copyLink();
};

export default SocialShare;
