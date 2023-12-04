const coreActionElement = document.getElementById(
  'spending-profile-core-action'
);
const coreCardElement = document.getElementById('spending-profile-core-card');
const coreHideElement = document.getElementById('see-core-spending-profile');
const coreShowElement = document.getElementById('hide-core-spending-profile');

const legacyActionElement = document.getElementById(
  'spending-profile-core-action'
);
const legacyCardElement = document.getElementById(
  'spending-profile-legacy-card'
);
const legacyHideElement = document.getElementById(
  'see-legacy-spending-profile'
);
const legacyShowElement = document.getElementById(
  'hide-legacy-spending-profile'
);

const SpendingProfile = () => {
  coreActionElement.addEventListener('click', () => {
    coreCardElement.classList.toggle('spending-profile--active');
    coreHideElement.classList.toggle('hide');
    coreShowElement.classList.toggle('show');
  });
  legacyActionElement.addEventListener('click', () => {
    legacyCardElement.classList.toggle('spending-profile--active');
    legacyHideElement.classList.toggle('hide');
    legacyShowElement.classList.toggle('show');
  });
};

export default SpendingProfile;
