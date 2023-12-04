import EmblaCarousel from 'embla-carousel';
import { createEmblaCarouselAutoHeight } from 'embla-carousel-auto-height';

export default function CreateCarousel(
  selector,
  options = {},
  autoHeight = false
) {
  const carouselNodes = document.querySelectorAll(selector);
  const carousels = [];

  carouselNodes.forEach((node) => {
    const plugins = [];
    if (autoHeight) {
      const autoHeightOptions = { destroyHeight: 'auto' }; // Options for AutoHeight plugin
      plugins.push(createEmblaCarouselAutoHeight(autoHeightOptions)); // Add AutoHeight plugin with options
    }
    const carousel = EmblaCarousel(node, options, plugins);
    carousels.push(carousel);
  });

  return carousels;
}
