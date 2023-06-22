const Returns = () => {
  // Use the Intersection Observer API to detect when 80% of the target element is in the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          const tdElements = document.querySelectorAll('#returns tbody td');
          tdElements.forEach((td) => {
            td.style.transform = 'scale3d(1, 1, 1) translateY(1px)';
            td.style.animation =
              'revealing-bars 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'; // easeOutQuad
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.9 }
  );

  // Select the target element
  const targetElement = document.querySelector('#returns');

  // Observe the target element
  observer.observe(targetElement);
};

export default Returns;
