import Questions from './components/Questions/Questions';
import SocialShare from './components/SocialShare/SocialShare';
import Copyright from './components/Copyright/Copyright';
import ProgressBar from './components/ProgressBar/ProgressBar';
import VideoModal from './components/VideoModal/VideoModal';
import StickyBanner from './components/StickyBanner/StickyBanner';
import Returns from './components/Returns/Returns';

const GlobalComponents = () => {
  Questions();
  SocialShare();
  Copyright();
  ProgressBar();
  VideoModal();
  StickyBanner();
  Returns();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
