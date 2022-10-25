import api from './axios';

class UsersAPI {
  signup = async (data) => {
    const response = await api.post('/users/signup/', data);
    return response;
  };
  signin = async (data) => {
    const response = await api.post('/users/signin/', data);
    return response;
  };
}

export default new UsersAPI();
