import axios from 'axios';

const axiosInstanst = axios.create({ baseURL: 'https://fakestoreapi.com' });

axiosInstanst.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default axiosInstanst;
