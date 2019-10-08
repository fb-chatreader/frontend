import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(req => {
  const token = localStorage.getItem('token');
  req.headers.authorization = token;
  return req;
});

axios.interceptors.response.use(
  res => res,
  err => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem('token');
    }

    return err;
  }
);
