import axios from 'axios';
import SnackBarService from './snackBarService';

export const URL_BASE = 'https://v3.football.api-sports.io/';
import { API_KEY } from '@env';

interface KeyValuePair {
  key: string;
  value: string;
}

const Api = axios.create({
  baseURL: URL_BASE,
});

Api.interceptors.request.use(async (config: any) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      'x-rapidapi-key': API_KEY,
      'Content-Type': 'application/json',
    },
  };
});

Api.interceptors.response.use(
  response => {
    if (Object.keys(response?.data?.errors).length > 0) {
      let values: any[] =  Object.entries(response?.data?.errors);
      values = [...values[0]]
      SnackBarService.exibe(values[1], 'red');      
    }
    return response;
  },
  error => {
    if (error?.message) {
      SnackBarService.exibe(error?.message, 'red');
      return error;
    } else if (error?.response?.data?.message) {
      SnackBarService.exibe(error?.response?.data?.message, 'red');
    }
    return Promise.reject(error);
  },
);

export default Api;
