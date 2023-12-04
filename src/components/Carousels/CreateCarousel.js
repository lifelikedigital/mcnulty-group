import EmblaCarousel from 'embla-carousel';

export default function CreateCarousel(selector, options = {}) {
  const carouselNodes = document.querySelectorAll(selector);
  const carousels = [];

  carouselNodes.forEach((node) => {
    const carousel = EmblaCarousel(node, options);
    carousels.push(carousel);
  });

  return carousels;
}
