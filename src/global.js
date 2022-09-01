import ButtonsLoadingState from './components/Buttons/ButtonsLoadingState';
import AgeGate from './components/Modals/AgeGate/AgeGate';
import ShopSegmentation from './components/Modals/ShopSegmentation/ShopSegmentation';
import CookiesConsent from './components/Modals/CookiesConsent/CookiesConsent';
import Nav from './components/Nav/Nav';
import CopyrightYear from './components/Footer/CopyrightYear';

// Imported into the main site settings head

const GlobalComponents = () => {
  ButtonsLoadingState();
  AgeGate();
  ShopSegmentation();
  CookiesConsent();
  Nav();
  CopyrightYear();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
