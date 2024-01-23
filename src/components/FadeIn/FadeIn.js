const FadeIn = () => {
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible'); // Add the is-visible class to the element
        observer.unobserve(entry.target); // Stop observing the element once it's in the viewport
      }
    });
  };

  const fadeInSection = document.querySelectorAll('.fade-in'); // Select elements with the fade-in class

  const observerOptions = {
    threshold: 0.5, // Trigger the callback when 50% of the element is in the viewport
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  fadeInSection.forEach((element) => {
    observer.observe(element); // Observe each element with the fade-in class
  });
};

export default FadeIn;
