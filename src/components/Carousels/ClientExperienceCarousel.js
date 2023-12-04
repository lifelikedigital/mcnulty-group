import CreateCarousel from './CreateCarousel';

const ClientExperienceCarousel = () => {
  const selector = '#testimonials-highlights-carousel .embla__viewport';
  const options = {
    loop: false,
    align: 'start',
  };
  const carousels = CreateCarousel(selector, options);
  const carousel = carousels[0];

  // Assuming the carousel has an ID of 'service-highlights-carousel'
  const carouselId = 'testimonials-highlights-carousel';

  // Select the buttons using the carousel ID
  const prevButton = document.querySelector(
    `#${carouselId} #testimonials-highlights-prev`
  );
  const nextButton = document.querySelector(
    `#${carouselId} #testimonials-highlights-next`
  );

  // Function to update button styles
  const updateButtonStyles = () => {
    if (prevButton && nextButton) {
      prevButton.classList.toggle('is-disabled', !carousel.canScrollPrev());
      nextButton.classList.toggle('is-disabled', !carousel.canScrollNext());
    }
  };

  // Add event listeners to the buttons
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      carousel.scrollPrev();
      updateButtonStyles();
    });
    nextButton.addEventListener('click', () => {
      carousel.scrollNext();
      updateButtonStyles();
    });
  }

  // Update button styles when the carousel's scroll position changes
  carousel.on('scroll', updateButtonStyles);

  // Update button styles initially
  updateButtonStyles();

  // Add any additional behavior here
};

export default ClientExperienceCarousel;
