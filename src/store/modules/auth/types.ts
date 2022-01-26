/**
 * Action types
 */

export enum AuthTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',

}

/**
 * Data Types
 */

 export interface Auth {
  usuario: string;
  senha: string;
  loading: boolean;
}

/**
 * State types
 */

 export interface AuthState {
  usuario: string;
  senha: string;
  loading: boolean;
}