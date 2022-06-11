import axios from 'axios';
import firebaseConfig from '../apiKeys';
// API CALLS FOR PATRONS

const dbUrl = firebaseConfig.databaseURL;

// TODO: GET PATRONS
const getPatrons = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/patrons.json`)
    .then((response) => resolve(Object.values(response.data))
      .catch((error) => reject(error)));
});

// TODO: DELETE PATRONS
const deletePatron = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/patrons/${firebaseKey}.json`)
    .then(() => {
      getPatrons().then((patronsArray) => resolve(patronsArray));
    })
    .catch((error) => reject(error));
});

// TODO: GET SINGLE PATRONS
const getSinglePatron = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/patrons/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// TODO: CREATE PATRONS
// const createBook = () => {};

// TODO: UPDATE PATRONS
// const updateBook = () => {};

// TODO: STRETCH...SEARCH PATRONS

export {
  getPatrons,
  deletePatron,
  getSinglePatron
};
