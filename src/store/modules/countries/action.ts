import { action } from 'typesafe-actions';

import { CountryTypes, Country } from './types';

export const countriesRequest = ( name?: string, code?:string, search?: string) =>
  action(CountryTypes.COUNTRIES_REQUEST, { name, code, search });

export const populateCountriesSuccess = (source: Country[]) =>
  action(CountryTypes.COUNTRIES_REQUEST_SUCCESS, {source});

export const populateCountriesFailure = () =>
  action(CountryTypes.COUNTRIES_REQUEST_FAILURE, {source: []});
