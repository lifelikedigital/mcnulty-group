const actionElement = document.getElementById('spending-profile-core-action');
const cardElement = document.getElementById('spending-profile-core-card');
const hideElement = document.getElementById('see-core-spending-profile');
const showElement = document.getElementById('hide-core-spending-profile');

const SpendingProfile = () => {
  actionElement.addEventListener('click', () => {
    cardElement.classList.toggle('spending-profile--active');
    hideElement.classList.toggle('hide');
    showElement.classList.toggle('show');
  });
};

export default SpendingProfile;
