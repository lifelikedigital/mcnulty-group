import { $ageGate, activeAgeGate } from '../AgeGate/AgeGate';
import { btnSuccess } from '../../Buttons/ButtonsLoadingState';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cookies from 'js-cookie';

// Selectors
const $acceptCookiesBtn = $('#accept-cookies');
const $cookiesConsentModal = $('.modal--cookies-consent');

// Cookie Names
const cookiesConsentCookie = 'acceptCookies';

// Functions
export const cookiesConsentPrompt = () => {
  // No presence of an age gate, so give the prompt a display of flex
  // $cookiesConsentModal.toggleClass(getConsent);
  // Set the GSAP animation to trigger when the user is 180% of the viewport from the top
  gsap.registerPlugin(ScrollTrigger);
  gsap.to($cookiesConsentModal, {
    y: 0,
    ease: 'power1.out',
    display: 'flex',
    scrollTrigger: {
      trigger: 'body',
      start: 'top -180%',
      end: 'top -180%',
    },
  });
  // Deal with the dismissal of the prompt
  $acceptCookiesBtn.on('click', function () {
    // When dismissed create cookie
    Cookies.set(cookiesConsentCookie, true, { expires: 30 });
    // Fire checkmark animation
    // Move out of view
    gsap.to($cookiesConsentModal, {
      yPercent: 150,
      ease: 'power1.out',
      display: 'none',
    });
  });
};

const CookiesConsent = () => {
  if (Cookies.get(cookiesConsentCookie)) {
    // If the cookies existence returns true, we won't show the cookies consent prompt again for 30 days
    return;
  } else {
    // If not, check for the existence of the age gate first
    if (
      $ageGate.hasClass(activeAgeGate) ||
      window.location.href.indexOf('legal') > -1
    ) {
      // Age gate exists so don't make the prompt visible
      return;
    } else if (!$ageGate.hasClass(activeAgeGate)) {
      // There is no age gate and we're not on the legal page, so deal with the prompt – this assuming this isn't coming immediately after clearing the age gate, which is dealt with in the age gate module
      cookiesConsentPrompt();
    }
  }
};

export default CookiesConsent;
