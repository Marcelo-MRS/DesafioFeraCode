import { action } from 'typesafe-actions';

import { UserPreferencesTypes, Country } from './types';

export const updateCountryRequest = (country: Country) =>
  action(UserPreferencesTypes.UPDATE_COUNTRY_REQUEST, {country});