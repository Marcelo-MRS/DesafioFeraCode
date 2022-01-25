import axios from 'axios';
import SnackBarService from './snackBarService';

export const URL_BASE = 'https://v3.football.api-sports.ios/';

const Api = axios.create({
  baseURL: URL_BASE,
});

Api.interceptors.request.use(async config => {
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

Api.interceptors.response.use(
  response => {
    if (response.data.errors) {
      SnackBarService.exibe(
        'Ocorreram erros em sua requisiçao, tente novamente mais tarde. ',
        'red',
      );
      // TODO: tornar a mensagem de erro mais clara para o usuario, percorrer array de errors e exibir messages
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
