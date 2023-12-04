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

  // Function to update carousel height and handle opacity transition
  const updateCarouselHeightAndOpacity = () => {
    const activeSlideIndex = carousel.selectedScrollSnap();
    const slides = document.querySelectorAll(`${selector} .team-drawer__slide`);
    const activeSlideHeight = slides[activeSlideIndex].offsetHeight;
    const carouselContainer = document.querySelector(selector);
    carouselContainer.style.height = `${activeSlideHeight}px`;

    // Handle opacity transition
    slides.forEach((slide, index) => {
      if (index === activeSlideIndex) {
        slide.classList.add('is--active-slide');
      } else {
        slide.classList.remove('is--active-slide');
      }
    });
  };

  // Add event listeners to the buttons
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      carousel.scrollPrev();
      updateButtonStyles();
      updateCarouselHeightAndOpacity();
    });
    nextButton.addEventListener('click', () => {
      carousel.scrollNext();
      updateButtonStyles();
      updateCarouselHeightAndOpacity();
    });
  }

  // Update carousel height when the carousel's scroll position changes
  carousel.on('scroll', () => {
    updateButtonStyles();
    updateCarouselHeightAndOpacity(); // update height on scroll
  });

  // Update button styles and carousel height initially
  updateButtonStyles();
  updateCarouselHeightAndOpacity();

  // Add any additional behavior here
};

export default TeamDrawerCarousel;
