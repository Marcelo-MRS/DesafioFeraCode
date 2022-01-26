import { action } from 'typesafe-actions';

import { AuthTypes } from './types';

export const loginRequest = (usuario: string, senha: string) =>
  action(AuthTypes.LOGIN_REQUEST, { usuario, senha });