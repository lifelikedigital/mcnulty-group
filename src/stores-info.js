import StoreAddressLinks from './components/StoreAddressLinks/StoreAddressLinks';
import StoreTitles from './components/Stores/StoreTitles';

// Imported into the Stores, Individual Stores and About pages head

const StoresRelated = () => {
  StoreTitles();
  StoreAddressLinks();
};

const init = () => {
  StoresRelated();
};

$(function () {
  init();
});
