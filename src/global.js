import Questions from './components/Questions/Questions';
import SocialShare from './components/SocialShare/SocialShare';
import Copyright from './components/Copyright/Copyright';
import ProgressBar from './components/ProgressBar/ProgressBar';
import VideoModal from './components/VideoModal/VideoModal';

const GlobalComponents = () => {
  Questions();
  SocialShare();
  Copyright();
  ProgressBar();
  VideoModal();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
