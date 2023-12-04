import CreateCarousel from './CreateCarousel';

const YourTeamCarousel = () => {
  const selector = '#service-highlights-carousel .embla__viewport';
  const options = {
    loop: false,
    containScroll: 'trimSnaps', // Add this line
  };
  const carousels = CreateCarousel(selector, options);

  // Add any additional behavior here
};

export default YourTeamCarousel;
