import Chart from './components/Chart/Chart';
import Questions from './components/Questions/Questions';
import SocialShare from './components/SocialShare/SocialShare';
import Copyright from './components/Copyright/Copyright';

const GlobalComponents = () => {
  Chart();
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
