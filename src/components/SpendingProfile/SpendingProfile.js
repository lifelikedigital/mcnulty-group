const actionElement = document.getElementById('spending-profile-core-action');
const cardElement = document.getElementById('spending-profile-core-card');

const SpendingProfile = () => {
  actionElement.addEventListener('click', () => {
    cardElement.classList.toggle('spending-profile--active');
  });
};

export default SpendingProfile;
