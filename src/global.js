import Questions from './components/Questions/Questions';
import SocialShare from './components/SocialShare/SocialShare';
import Copyright from './components/Copyright/Copyright';
import ProgressBar from './components/ProgressBar/ProgressBar';
import VideoModal from './components/VideoModal/VideoModal';
import StickyBanner from './components/StickyBanner/StickyBanner';

const GlobalComponents = () => {
  Questions();
  SocialShare();
  Copyright();
  ProgressBar();
  VideoModal();
  StickyBanner();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
