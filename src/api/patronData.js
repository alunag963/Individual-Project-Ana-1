import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// :  GET ALL PATRON
const getPatron = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/patrons.json`)
    .then((response) => resolve(Object.values(response.data))
      .catch((error) => reject(error)));
});

// : CREATE PATRONS
const createPatrons = (patronObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/patrons.json`, patronObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/patrons/${response.data.name}.json`, payload)
        .then(() => {
          getPatron().then(resolve);
        });
    }).catch(reject);
});

// : GET SINGLE PATRON
const getSinglePatron = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/patrons/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// : DELETE PATRON
const deleteSinglePatron = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/patrons/${firebaseKey}.json`)
    .then(() => {
      getPatron().then(resolve);
    }).catch(reject);
});

// : UPDATE PATRON
const updatePatron = (patronObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/patrons/${patronObj.firebaseKey}.json`, patronObj)
    .then(() => getPatron().then(resolve))
    .catch(reject);
});

// TODO: GET A SINGLE PATRON'S PRODUCT
const getPatronProduct = (patronId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/patrons.json?orderBy="patron_id"&equalTo="${patronId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export {
  getPatron,
  createPatrons,
  getSinglePatron,
  deleteSinglePatron,
  updatePatron,
  getPatronProduct,
};
