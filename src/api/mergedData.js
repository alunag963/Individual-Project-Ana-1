import { getSingleProduct, deleteProducts } from './productsData';
import { getSinglePatron, deleteSinglePatron, getPatronProduct } from './patronData';

const viewProductDetails = (productsFirebaseKey) => new Promise((resolve, reject) => {
  getSingleProduct(productsFirebaseKey)
    .then((productsObject) => {
      getSinglePatron(productsObject.patron_id)
        .then((patronObject) => {
          resolve({ patronObject, ...productsObject });
        });
    }).catch((error) => reject(error));
});

const viewPatronDetails = (patronsFirebaseKey) => new Promise((resolve, reject) => {
  getSinglePatron(patronsFirebaseKey)
    .then((patronsObject) => {
      getSingleProduct(patronsObject.products_id)
        .then((productsObject) => {
          resolve({ productsObject, ...patronsObject });
        });
    }).catch((error) => reject(error));
});

const deletePatronsProducts = (patronsId) => new Promise((resolve, reject) => {
  getPatronProduct(patronsId).then((productsArray) => {
    console.warn(productsArray, 'Patrons Products');
    const deleteProductsPromises = productsArray.map((product) => deleteProducts(product.firebaseKey));
    // console.warn(deleteBookPromises);

    Promise.all(deleteProductsPromises).then(() => {
      deleteSinglePatron(patronsId).then(resolve);
      // deleteSingleAuthor(authorId).then(response) => resolve(response)); THIS LINE AND THE ONE ABOVE ARE INTERCHANGEABLE
    });
  }).catch((error) => reject(error));
});

export { viewProductDetails, viewPatronDetails, deletePatronsProducts };
