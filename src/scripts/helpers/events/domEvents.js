import { deleteProducts, getSingleProduct } from '../../../api/productsData';
import { viewPatronDetails, viewProductDetails } from '../../../api/mergedData';
import { showProducts } from '../../../components/pages/products';
import viewProducts from '../../../components/pages/productsPage';
import addProductForm from '../../../components/forms/adminAddProductsForms';
import viewPatrons from '../../../components/pages/patronsPage';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A PRODUCT
    if (e.target.id.includes('delete-product')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteProducts(firebaseKey).then((productsArray) => showProducts(productsArray));
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A PRODUCT
    if (e.target.id.includes('add-prod-btn')) {
      addProductForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A PRODUCT
    if (e.target.id.includes('edit-product-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleProduct(firebaseKey).then((prouctObj) => addProductForm(prouctObj));
    }

    // TODO: CLICK EVENT FOR VIEW PRODUCT DETAILS
    if (e.target.id.includes('view-product-btn')) {
      const [, productsFirebaseKey] = e.target.id.split('--');

      viewProductDetails(productsFirebaseKey).then((productsPatronsObject) => viewProducts(productsPatronsObject));
    }
    if (e.target.id.includes('view-patron-btn')) {
      const [, patronsFirebaseKey] = e.target.id.split('--');

      viewPatronDetails(patronsFirebaseKey).then((patronsProductsObject) => viewPatrons(patronsProductsObject));
    }

    // FIXME: ADD CLICK EVENT FOR DELETING AN PATRON
    if (e.target.id.includes('delete-patron-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deletePatronsProducts(firebaseKey).then(showPatrons);
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A PATRON
    if (e.target.id.includes('add-author-btn')) {
      console.warn('ADD AUTHOR');
    }
    // FIXME: ADD CLICK EVENT FOR EDITING A PATRON
  });
};

export default domEvents;
