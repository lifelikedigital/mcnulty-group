import { createEmblaCarousel } from 'embla-carousel';
import { createEmblaCarouselAutoHeight } from 'embla-carousel-auto-height';

const TeamDrawerCarousel = () => {
  const emblaNode = document.querySelector(
    '#team-drawer-carousel .embla__viewport'
  );
  const options = {
    loop: false,
    align: 'start',
  };

  const embla = createEmblaCarousel(emblaNode, options);
  const autoHeight = createEmblaCarouselAutoHeight(embla);

  // Assuming the carousel has an ID of 'team-drawer-carousel'
  const carouselId = 'team-drawer-carousel';

  // Select the buttons using the carousel ID
  const prevButton = document.querySelector(`#${carouselId} #team-drawer-prev`);
  const nextButton = document.querySelector(`#${carouselId} #team-drawer-next`);

  // Function to update button styles
  const updateButtonStyles = () => {
    if (prevButton && nextButton) {
      prevButton.classList.toggle('is-disabled', !embla.canScrollPrev());
      nextButton.classList.toggle('is-disabled', !embla.canScrollNext());
    }
  };

  // Add event listeners to the buttons
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      embla.scrollPrev();
      updateButtonStyles();
    });
    nextButton.addEventListener('click', () => {
      embla.scrollNext();
      updateButtonStyles();
    });
  }

  // Update button styles when the carousel's scroll position changes
  embla.on('scroll', updateButtonStyles);

  // Update button styles initially
  updateButtonStyles();

  // Initialize the Auto Height plugin
  autoHeight.update();

  // Add any additional behavior here
};

export default TeamDrawerCarousel;
