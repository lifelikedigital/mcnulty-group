const FadeIn = () => {
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const observeFadeInElements = () => {
    const fadeInSection = document.querySelectorAll('.fade-in');
    fadeInSection.forEach((element) => {
      observer.observe(element);
    });
  };

  // Observe initial elements
  observeFadeInElements();

  // Set up a MutationObserver to watch for changes in the DOM
  const mutationObserver = new MutationObserver(() => {
    // When a change is detected, observe new elements
    observeFadeInElements();
  });

  // Start observing the document with the configured parameters
  mutationObserver.observe(document, { childList: true, subtree: true });
};

export default FadeIn;
