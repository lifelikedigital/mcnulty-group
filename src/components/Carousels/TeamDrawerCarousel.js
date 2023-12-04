import CreateCarousel from './CreateCarousel';

const TeamDrawerCarousel = () => {
  const selector = '#team-drawer-carousel .embla__viewport';
  const options = {
    loop: false,
    align: 'start',
  };
  const carousels = CreateCarousel(selector, options, true); // Pass true to use AutoHeight
  const carousel = carousels[0];

  // Assuming the carousel has an ID of 'team-drawer-carousel'
  const carouselId = 'team-drawer-carousel';

  // Select the buttons using the carousel ID
  const prevButton = document.querySelector(`#${carouselId} #team-drawer-prev`);
  const nextButton = document.querySelector(`#${carouselId} #team-drawer-next`);

  // Function to update button styles
  const updateButtonStyles = () => {
    if (prevButton && nextButton) {
      prevButton.classList.toggle('is-disabled', !carousel.canScrollPrev());
      nextButton.classList.toggle('is-disabled', !carousel.canScrollNext());
    }
  };

  // Function to update carousel height
  const updateCarouselHeight = () => {
    console.log(carousel.slides); // Log the slides array
    console.log(carousel.selectedScrollSnap()); // Log the selected scroll snap index
    const slide = carousel.slides[carousel.selectedScrollSnap()];
    carouselNode.style.height = `${slide.scrollHeight}px`;
  };

  // Add event listeners to the buttons
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      carousel.scrollPrev();
      updateButtonStyles();
      updateCarouselHeight();
    });
    nextButton.addEventListener('click', () => {
      carousel.scrollNext();
      updateButtonStyles();
      updateCarouselHeight();
    });
  }

  // Update button styles and carousel height when the carousel's scroll position changes
  carousel.on('scroll', () => {
    updateButtonStyles();
    updateCarouselHeight();
  });

  // Update button styles and carousel height initially
  updateButtonStyles();
  updateCarouselHeight();

  // Add any additional behavior here
};

export default TeamDrawerCarousel;
