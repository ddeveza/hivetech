import axios from 'axios';

export default axios.create({
  baseURL: 'https://hivetechwear-backend.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
