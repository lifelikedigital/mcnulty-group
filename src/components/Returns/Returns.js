const Returns = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          const tdElements = document.querySelectorAll('#returns tbody td');
          tdElements.forEach((td) => {
            td.style.animation =
              'revealing-bars 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'; // easeOutQuad
            if (window.innerWidth <= 991) {
              td.style.transform = 'scale3d(1, 1, 1) translateY(0.95px)';
            } else {
              td.style.transform = 'scale3d(1, 1, 1) translateY(1.35px)';
            }
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.9 }
  );

  const targetElement = document.querySelector('#returns');
  observer.observe(targetElement);
};

export default Returns;
