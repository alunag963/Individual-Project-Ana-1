import clearDom from '../../scripts/helpers/clearDom';
import renderToDOM from '../../scripts/helpers/renderToDom';

const showProducts = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Product</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((products) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${products.image} alt=${products.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${products.title}</h5>
            <p class="card-text bold">${products.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${products.price}` : `$${products.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${products.firebaseKey}"></i>
            <i id="edit-book-btn--${products.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${products.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

const emptyProducts = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showProducts, emptyProducts };
