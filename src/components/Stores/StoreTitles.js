const $cityStoreTitleEl = $('h2.store-locations__heading');
const $allStoreTitleEl = $(
  'h3.store-locations__heading:not(.stores-location__heading--sub)'
);
const $aboutStoreTitleEl = $('h3.about__stores-heading');

const StoreTitles = () => {
  const titleFormatter = (el) => {
    for (let i = 0; i < el.length; i++) {
      const storeTitleSplit = el[i].innerText.split(' ');
      const lastWord = storeTitleSplit.pop();
      const firstHalf = storeTitleSplit.join(' ');
      const newTitle =
        el === $cityStoreTitleEl
          ? `<h2 class="store-locations__heading">${firstHalf} <span class="line-break">${lastWord}</span></h2>`
          : el === $aboutStoreTitleEl
          ? `<h3 class="about__stores-heading">${firstHalf} <span class="line-break">${lastWord}</span></h3>`
          : `<h3 class="store-locations__heading">${firstHalf} <span class="line-break">${lastWord}</span></h3>`;
      el[i].outerHTML = newTitle;
    }
  };
  titleFormatter($cityStoreTitleEl);
  titleFormatter($allStoreTitleEl);
  titleFormatter($aboutStoreTitleEl);
};

export default StoreTitles;
