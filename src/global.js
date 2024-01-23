// import FadeIn from './components/FadeIn/FadeIn';
import Drawers from './components/Drawers/Drawers';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Questions from './components/Questions/Questions';
import VideoModal from './components/VideoModal/VideoModal';
// import Copyright from './components/Copyright/Copyright';
import SpendingProfile from './components/SpendingProfile/SpendingProfile';
import YourTeamCarousel from './components/Carousels/YourTeamCarousel';
import ClientExperienceCarousel from './components/Carousels/ClientExperienceCarousel';
import InsightsCarousel from './components/Carousels/InsightsCarousel';
import TeamDrawerCarousel from './components/Carousels/TeamDrawerCarousel';
import FadeIn from './components/FadeIn/FadeIn';

const GlobalComponents = () => {
  FadeIn();
  Drawers();
  MobileMenu();
  Questions();
  SpendingProfile();
  YourTeamCarousel();
  ClientExperienceCarousel();
  InsightsCarousel();
  TeamDrawerCarousel();
  VideoModal();
  // Copyright();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
