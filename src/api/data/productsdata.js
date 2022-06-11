import axios from 'axios';
import firebaseConfig from '../apiKeys';
// API CALLS FOR PRODUCTS

const dbUrl = firebaseConfig.databaseURL;

// TODO: GET PRODUCTS
const getProducts = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Products.json`)
    .then((response) => resolve(Object.values(response.data))
      .catch((error) => reject(error)));
});

// TODO: DELETE PRODUCT
const deleteProduct = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Products/${firebaseKey}.json`)
    .then(() => {
      getProducts().then((productsArray) => resolve(productsArray));
    })
    .catch((error) => reject(error));
});

// TODO: GET SINGLE PRODUCT
const getSingleProduct = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Products/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// TODO: CREATE PRODUCT
// const createBook = () => {};

// TODO: UPDATE BOOK
// const updateBook = () => {};

// TODO: STRETCH...SEARCH BOOKS

export {
  getProducts,
  deleteProduct,
  getSingleProduct
};
