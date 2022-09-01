import SocialShare from './components/SocialShare/SocialShare';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import CopyrightYear from './components/Footer/CopyrightYear';

// Imported into the main site settings head

const GlobalComponents = () => {
  SocialShare();
  FrequentlyAskedQuestions();
  CopyrightYear();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
