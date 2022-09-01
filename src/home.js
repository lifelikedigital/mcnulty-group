import DailySpecials from './components/DailySpecials/DailySpecials';

// Imported into the Home page head

const HomePage = () => {
  DailySpecials();
};

const init = () => {
  HomePage();
};

$(function () {
  init();
});
