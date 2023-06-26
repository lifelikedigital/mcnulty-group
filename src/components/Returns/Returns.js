const Returns = () => {
  const isMobileLandscape =
    window.innerWidth <= 991 &&
    window.matchMedia('(orientation: landscape)').matches;
  const threshold = isMobileLandscape ? 0.5 : 0.9;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          const tdElements = document.querySelectorAll('#returns tbody td');
          tdElements.forEach((td) => {
            td.style.animation =
              'revealing-bars 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
            td.style.transform = isMobileLandscape
              ? 'scale3d(1, 1, 1) translateY(0.95px)'
              : 'scale3d(1, 1, 1) translateY(1px)';
          });
          observer.disconnect();
        }
      });
    },
    { threshold }
  );

  const targetElement = document.querySelector('#returns');
  observer.observe(targetElement);
};

export default Returns;
