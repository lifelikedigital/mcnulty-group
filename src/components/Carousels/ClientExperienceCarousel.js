import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

const ClientExperienceCarousel = () => {
  var slider = new KeenSlider(
    '#testimonials-highlights-carousel',
    {
      loop: true,
      created: () => {
        console.log('created');
      },
    },
    [
      // add plugins here
    ]
  );
};

export default ClientExperienceCarousel;

// import CreateCarousel from './CreateCarousel';

// const ClientExperienceCarousel = () => {
//   const selector = '#testimonials-highlights-carousel .embla__viewport';
//   const options = {
//     loop: false,
//     align: 'center',
//   };
//   let carousels;
//   let carousel;

//   let prevButton;
//   let nextButton;

//   // Function to handle prevButton click
//   const handlePrevClick = () => {
//     carousel.scrollPrev();
//     updateButtonStyles();
//   };

//   // Function to handle nextButton click
//   const handleNextClick = () => {
//     carousel.scrollNext();
//     updateButtonStyles();
//   };

//   // Function to update button styles
//   const updateButtonStyles = () => {
//     if (prevButton && nextButton) {
//       prevButton.classList.toggle('is-disabled', !carousel.canScrollPrev());
//       nextButton.classList.toggle('is-disabled', !carousel.canScrollNext());
//     }
//   };

//   // Function to setup buttons
//   const setupButtons = () => {
//     // Assuming the carousel has an ID of 'testimonials-highlights-carousel'
//     const carouselId = 'testimonials-highlights-carousel';

//     // Select the buttons using the carousel ID
//     prevButton = document.querySelector(
//       `#${carouselId} #testimonials-highlights-prev`
//     );
//     nextButton = document.querySelector(
//       `#${carouselId} #testimonials-highlights-next`
//     );

//     // Remove existing event listeners
//     if (prevButton && nextButton) {
//       prevButton.removeEventListener('click', handlePrevClick);
//       nextButton.removeEventListener('click', handleNextClick);

//       // Add event listeners to the buttons
//       prevButton.addEventListener('click', handlePrevClick);
//       nextButton.addEventListener('click', handleNextClick);

//       // Update button styles after adding new event listeners
//       updateButtonStyles();
//     }
//   };

//   // Function to setup carousel
//   const setupCarousel = () => {
//     if (window.matchMedia('(max-width: 991px)').matches) {
//       options.active = true;
//       carousels = CreateCarousel(selector, options);
//       carousel = carousels[0];

//       // Setup buttons
//       setupButtons();

//       // Update button styles when the carousel's scroll position changes
//       carousel.on('scroll', updateButtonStyles);
//     } else {
//       options.active = false;
//       if (carousel) {
//         carousel.destroy();
//       }
//     }
//   };

//   // Setup carousel initially
//   setupCarousel();

//   // Setup carousel and buttons again when the window is resized
//   window.addEventListener('resize', setupCarousel);
// };

// export default ClientExperienceCarousel;
