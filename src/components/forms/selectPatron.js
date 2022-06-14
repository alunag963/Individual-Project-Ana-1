import { getPatron } from '../../api/patronData';
import renderToDOM from '../../scripts/helpers/renderToDom';

const selectPatron = (patronId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getPatron().then((patronArray) => {
    patronArray.forEach((patron) => {
      domString += `
          <option 
            value="${patron.firebaseKey}" 
            ${patronId === patron.firebaseKey ? 'selected' : ''}>
              ${patron.first_name} ${patron.last_name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectPatron;
