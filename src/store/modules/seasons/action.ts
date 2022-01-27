import { action } from 'typesafe-actions';

import { SeasonTypes } from './types';

export const seasonsRequest = () =>
  action(SeasonTypes.SEASON_REQUEST);

export const populateSeasonsSuccess = (source: []) =>
  action(SeasonTypes.SEASON_REQUEST_SUCCESS, {source});

export const populateSeasonsFailure = () =>
  action(SeasonTypes.SEASON_REQUEST_FAILURE, {source: []});
