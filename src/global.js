import Returns from './components/Returns/Returns';
import Questions from './components/Questions/Questions';
import SocialShare from './components/SocialShare/SocialShare';
import Copyright from './components/Copyright/Copyright';

const GlobalComponents = () => {
  Returns();
  Questions();
  SocialShare();
  Copyright();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
