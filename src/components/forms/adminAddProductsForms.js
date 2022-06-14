import clearDom from '../../scripts/helpers/clearDom';
import renderToDOM from '../../scripts/helpers/renderToDom';
import selectPatron from './selectPatron';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addProductForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-product--${obj.firebaseKey}` : 'submit-product'}" class="mb-4">
      <div class="form-group">
        <label for="title">Product Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="productTitle" placeholder="Enter Product title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="word definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
      <label for="description">Language</label>
      <textarea class="form-control" placeholder="language used" id="language" style="height: 100px">${obj.language || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="price">Time submitted</label>
        <input type="text" class="form-control" id="time" placeholder="time submitted" value="${obj.time || ''}" required>
      </div>
      <div class="form-group" id="select-patron">
      </div>
      <div class="form-group">
        <label for="price">Time submitted</label>
        <input type="text" class="form-control" id="time" placeholder="time submitted" value="${obj.uid || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit Book
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectPatron(`${obj.patron_id || ''}`);
};

export default addProductForm;
