/**
 * Action types
 */

export enum CountryTypes {
  COUNTRIES_REQUEST = '@leagues/COUNTRIES_REQUEST',
  COUNTRIES_REQUEST_SUCCESS = '@leagues/COUNTRIES_REQUEST_SUCCESS',
  COUNTRIES_REQUEST_FAILURE = '@leagues/COUNTRIES_REQUEST_FAILURE',

}

/**
 * Data Types
 */

export interface Country {
  name: string;
  code: string;
  flag: string;
}

/**
 * State types
 */

 export interface CountryState {
  countries?: Country[];
  loading: boolean;
}