const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const copyrightYearElement = document.getElementById('copyright-year');

  if (copyrightYearElement) {
    copyrightYearElement.textContent = currentYear;
  }
};

export default Copyright;
