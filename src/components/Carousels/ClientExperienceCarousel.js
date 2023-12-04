import CreateCarousel from './CreateCarousel';

const ClientExperienceCarousel = () => {
  const selector = '#testimonials-highlights-carousel .embla__viewport';
  const options = {
    loop: false,
    align: 'start',
  };
  const carousels = CreateCarousel(selector, options);
  const carousel = carousels[0];

  // Assuming the carousel has an ID of 'testimonials-highlights-carousel'
  const carouselId = 'testimonials-highlights-carousel';

  let prevButton;
  let nextButton;

  // Function to handle prevButton click
  const handlePrevClick = () => {
    carousel.scrollPrev();
    updateButtonStyles();
  };

  // Function to handle nextButton click
  const handleNextClick = () => {
    carousel.scrollNext();
    updateButtonStyles();
  };

  // Function to update button styles
  const updateButtonStyles = () => {
    if (prevButton && nextButton) {
      prevButton.classList.toggle('is-disabled', !carousel.canScrollPrev());
      nextButton.classList.toggle('is-disabled', !carousel.canScrollNext());
    }
  };

  // Function to setup buttons
  const setupButtons = () => {
    // Select the buttons using the carousel ID
    prevButton = document.querySelector(
      `#${carouselId} #testimonials-highlights-prev`
    );
    nextButton = document.querySelector(
      `#${carouselId} #testimonials-highlights-next`
    );

    // Remove existing event listeners
    prevButton.removeEventListener('click', handlePrevClick);
    nextButton.removeEventListener('click', handleNextClick);

    // Add event listeners to the buttons
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', handlePrevClick);
      nextButton.addEventListener('click', handleNextClick);

      // Update button styles after adding new event listeners
      updateButtonStyles();
    }
  };

  // Setup buttons initially
  setupButtons();

  // Setup buttons again when the window is resized
  window.addEventListener('resize', setupButtons);

  // Update button styles when the carousel's scroll position changes
  carousel.on('scroll', updateButtonStyles);

  // Add any additional behavior here
};

export default ClientExperienceCarousel;
