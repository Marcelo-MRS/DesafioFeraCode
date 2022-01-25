import axios from 'axios';
import SnackBarSevice from './SnackBarSevice';

export const URL_BASE = 'https://v3.football.api-sports.io/';

const api = axios.create({
  baseURL: 'URL_BASE',
});

api.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      ...config.headers,
      'x-rapidapi-host': 'x-rapidapi-host',
      'x-rapidapi-key': 'x-rapidapi-key',
      'x-apisports-key': 'x-apisports-key',
      'Content-Type': 'application/json',
    },
  };
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.message) {
      SnackBarSevice.exibe(error?.message, 'red');
      return error;
    }
    return Promise.reject(error);
  },
);

export default api;
