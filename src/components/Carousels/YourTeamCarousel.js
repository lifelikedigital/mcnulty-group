import CreateCarousel from './CreateCarousel';

const YourTeamCarousel = () => {
  const selector = '#service-highlights-carousel .embla__viewport';
  const options = {
    loop: false,
    align: 'start',
  };
  const carousels = CreateCarousel(selector, options);

  // Assuming the carousel has an ID of 'service-highlights-carousel'
  const carouselId = 'service-highlights-carousel';

  // Select the buttons using the carousel ID
  const prevButton = document.querySelector(
    `#${carouselId} #service-highlights-prev`
  );
  const nextButton = document.querySelector(
    `#${carouselId} #service-highlights-next`
  );

  // Add event listeners to the buttons
  prevButton.addEventListener('click', () => carousels[0].scrollPrev());
  nextButton.addEventListener('click', () => carousels[0].scrollNext());

  // Add any additional behavior here
};

export default YourTeamCarousel;
