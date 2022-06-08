import signIn from '../helpers/signIn';
// import renderToDom from '../../helpers/renderToDom';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  // renderToDom('#app, domString');
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
