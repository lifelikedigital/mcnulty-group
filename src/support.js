import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';

// Imported into the Customer Support page head

const CustomerSupport = () => {
  FrequentlyAskedQuestions();
};

const init = () => {
  CustomerSupport();
};

$(function () {
  init();
});
