// Button Selectors
let $footerSubmit = $('#newsletter-subscribe'); // footer opt-in
const $footerOptInForm = $('#newsletter-optin-form'); // footer opt-in form
export let $segmentationSubmit = $('#go-to-menu'); // segmentation button
export let $modalBtn = $('#go-to-menu > .main-button__text'); // segmentation button text
// prettier-ignore
let $jobApplicationSubmit = $('.main-button.main-button--fixed.is--job-application'); // job application buttons
const $jobApplicationForm = $('.application__form');
export let defaultModalBtn;

// Classes
export const btnLoading = 'main-button--waiting';
export const btnSuccess = 'main-button--success';

// Replacement HTML
const footerSubmitReplacement = `
  <button class="main-button main-button--fixed is--submit" id="newsletter-subscribe">
    <span class="main-button__text">Subscribe</span>
  </button>
  `;

const segmentationSubmitReplacement = `
  <button class="main-button main-button--fixed main-button--modal is--submit" id="go-to-menu">
    <span class="main-button__text">Go to Menu</span>
  </button>
`;

const jobApplicationSubmitReplacement = `
  <button class="main-button main-button--fixed is--job-application">
    <span class="main-button__text">Submit Application</span>
  </button>
`;

// on form submit animate inside the button
const ButtonsLoadingState = () => {
  // Footer
  $footerSubmit.replaceWith(footerSubmitReplacement);
  $footerSubmit = $('#newsletter-subscribe');
  $footerOptInForm.submit(function () {
    $footerSubmit.toggleClass(btnLoading);
    const $this = $(this);
    $.ajax({
      type: 'POST',
      data: $this.serialize(),
      success: function (data) {
        // console.log('success');
        $footerSubmit.toggleClass(btnLoading);
        $footerSubmit.toggleClass(btnSuccess);
        // $this[0].reset();
        setTimeout(function () {
          $footerSubmit.toggleClass(btnSuccess);
        }, 1000);
      },
      error: function (data) {
        console.log('error');
        $footerSubmit.toggleClass(btnLoading);
        // temporary to be able to see how the success state looks in either case, remove
        $footerSubmit.toggleClass(btnSuccess);
        // $this[0].reset();
        setTimeout(function () {
          $footerSubmit.toggleClass(btnSuccess);
        }, 1000);
      },
    });
  });

  // Job apps
  $jobApplicationSubmit.replaceWith(jobApplicationSubmitReplacement);
  // prettier-ignore
  $jobApplicationSubmit = $('.main-button.main-button--fixed.is--job-application');
  $jobApplicationForm.submit(function () {
    $jobApplicationSubmit.toggleClass(btnLoading);
    const $this = $(this);
    $.ajax({
      type: 'POST',
      data: $this.serialize(),
      success: function (data) {
        // console.log('success');
        $jobApplicationSubmit.toggleClass(btnLoading);
        $jobApplicationSubmit.toggleClass(btnSuccess);
        // $this[0].reset();
        setTimeout(function () {
          $jobApplicationSubmit.toggleClass(btnSuccess);
        }, 1000);
      },
      error: function (data) {
        console.log('error');
        $jobApplicationSubmit.toggleClass(btnLoading);
        // temporary to be able to see how the success state looks in either case, remove
        $jobApplicationSubmit.toggleClass(btnSuccess);
        // $this[0].reset();
        setTimeout(function () {
          $jobApplicationSubmit.toggleClass(btnSuccess);
        }, 1000);
      },
    });
  });

  // Segmentation
  $segmentationSubmit.replaceWith(segmentationSubmitReplacement);
  $segmentationSubmit = $('#go-to-menu');
  $modalBtn = $('#go-to-menu > .main-button__text');
  defaultModalBtn = $modalBtn.html();
};

export default ButtonsLoadingState;
