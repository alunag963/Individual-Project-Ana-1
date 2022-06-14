import axios from 'axios';
import firebaseConfig from './apiKeys';
// API CALLS FOR PRODUCTS

const dbUrl = firebaseConfig.databaseURL;

// TODO: GET Products
const getProducts = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/products.json`)
    .then((response) => resolve(Object.values(response.data))
      .catch((error) => reject(error)));
});

// TODO: DELETE Products
const deleteProducts = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/products/${firebaseKey}.json`)
    .then(() => {
      getProducts().then((productsArray) => resolve(productsArray));
    })
    .catch((error) => reject(error));
});

// TODO: GET SINGLE PRODUCT
const getSingleProduct = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/products/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// TODO: CREATE PRODUCT
const createProduct = (productObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/products.json`, productObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/products/${response.data.name}.json`, payload)
        .then(() => {
          getProducts().then(resolve);
        });
    }).catch(reject);
});

// TODO: UPDATE BOOK
const updateBook = (bookObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/Books/${bookObj.firebaseKey}.json`, bookObj)
    .then(() => getProducts().then(resolve))
    .catch(reject);
});

// TODO: STRETCH...SEARCH BOOKS

export {
  getProducts,
  deleteProducts,
  getSingleProduct,
  createProduct,
  updateBook,
};
