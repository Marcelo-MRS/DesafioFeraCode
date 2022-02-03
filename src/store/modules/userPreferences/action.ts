import { action } from 'typesafe-actions';

import { UserPreferencesTypes, Country, OffLineAccess } from './types';

export const updateCountryRequest = (country: Country) =>
  action(UserPreferencesTypes.UPDATE_COUNTRY_REQUEST, {country});

export const updateOfflineAccess = (target: string, source: any) =>
action(UserPreferencesTypes.UPDATE_OFFLINE_ACCESS, {target, source});