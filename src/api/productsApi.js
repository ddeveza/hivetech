import axios from './axios';

class productsApi {
  /* All api request related to products */
  getCategories = async () => {
    try {
      const { data } = await axios.get('/categories/');
      return data;
    } catch (error) {
      return error.message;
    }
  };
}

export default new productsApi();
