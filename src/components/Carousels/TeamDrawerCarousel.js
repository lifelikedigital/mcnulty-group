import CreateCarousel from './CreateCarousel';

const TeamDrawerCarousel = () => {
  const selector = '#team-drawer-carousel .embla__viewport';
  const options = {
    loop: false,
    align: 'start',
  };
  const carousels = CreateCarousel(selector, options);
  const carousel = carousels[0];

  // Assuming the carousel has an ID of 'service-highlights-carousel'
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
    const activeSlide = carousel.selectedSlide();
    const activeSlideHeight = activeSlide.offsetHeight;
    const carouselContainer = document.querySelector(selector);
    carouselContainer.style.height = `${activeSlideHeight}px`;
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

  // Update carousel height when the carousel's scroll position changes
  carousel.on('scroll', () => {
    updateButtonStyles();
    updateCarouselHeight(); // update height on scroll
  });

  // Update button styles and carousel height initially
  updateButtonStyles();
  updateCarouselHeight();

  // Add any additional behavior here
};

export default TeamDrawerCarousel;
