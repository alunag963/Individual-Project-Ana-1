// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h2>Welcome to Ur Curlfriend! We're an online safespace for friends with curls, kinks, and everything inbetween! Create your own profile to describe yourself, feel free to add products, view blog posts, and showcase reviews with your fellow Curlfriends! </h2>
    <button class="btn btn-danger" id="click-me"></button><br />
    <hr />
    <h2>Brought to you by Ur Curlfriend</h2>
  `;
  console.warn('get into it yuh yuh yuh');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
