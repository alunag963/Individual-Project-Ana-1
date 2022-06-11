// put in products cards
import { getProducts } from '../../api/data/productsData';
import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../../components/pages/domBuilder';
import navBar from '../../components/pages/navBar';
import { showProducts } from '../../components/pages/products';
import domEvents from './events/domEvents';
import formEvents from './events/formEvents';
import navigationEvents from './events/navigationEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  // eslint-disable-next-line no-undef
  getProducts().then((productsArray) => showProducts(productsArray));
};

export default startApp;
