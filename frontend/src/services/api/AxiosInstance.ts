import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5256/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;