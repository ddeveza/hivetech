import axios from './axios';

class productsApi {
  /* All api request related to products */
  getCategories = async () => await axios.get('/categories/');

  getProducts = async (query = {}) => {
    const response = await axios.get('/products/', {
      params: query,
      requireToken: true,
    });
    return response;
  };
}

export default new productsApi();
