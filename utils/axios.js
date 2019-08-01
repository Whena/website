import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error.response.data);
  }
);

export default axios;