// import FadeIn from './components/FadeIn/FadeIn';
import Drawers from './components/Drawers/Drawers';
import Questions from './components/Questions/Questions';
// import VideoModal from './components/VideoModal/VideoModal';
// import Copyright from './components/Copyright/Copyright';

const GlobalComponents = () => {
  // FadeIn();
  Drawers();
  Questions();
  // VideoModal();
  // Copyright();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
