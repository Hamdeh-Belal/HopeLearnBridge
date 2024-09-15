import axios from 'axios';
import config from '../../config';

const axiosInstance = axios.create({
  baseURL: `${config.backendApiBaseUrl}/api/v1/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);

export default axiosInstance;