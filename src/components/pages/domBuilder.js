import renderToDOM from '../../scripts/helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="welcome"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>
  <div id="footer"></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
