import FadeIn from './components/FadeIn/FadeIn';
import Questions from './components/Questions/Questions';
import ProgressBar from './components/ProgressBar/ProgressBar';
import VideoModal from './components/VideoModal/VideoModal';
import StickyBanner from './components/StickyBanner/StickyBanner';
import Returns from './components/Returns/Returns';
import Copyright from './components/Copyright/Copyright';

const GlobalComponents = () => {
  FadeIn();
  ProgressBar();
  StickyBanner();
  VideoModal();
  Returns();
  Questions();
  Copyright();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
