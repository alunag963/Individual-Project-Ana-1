import { getSingleProduct } from './data/productsData';
import { getSinglePatron } from './data/patronData';

const viewProductDetails = (productsFirebaseKey) => new Promise((resolve, reject) => {
  getSingleProduct(productsFirebaseKey)
    .then((productsObject) => {
      getSinglePatron(productsObject.patron_id)
        .then((patronrObject) => {
          resolve({ patronObject, ...productsObject });
        });
    }).catch((error) => reject(error));
});

export default viewProductDetails;
