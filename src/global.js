import Questions from './components/Questions/Questions';
import SocialShare from './components/SocialShare/SocialShare';
import Copyright from './components/Copyright/Copyright';
import ProgressBar from './components/ProgressBar/ProgressBar';

const GlobalComponents = () => {
  Questions();
  SocialShare();
  Copyright();
  ProgressBar();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
