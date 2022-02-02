import { action } from 'typesafe-actions';

import { StandingsTypes, Standings } from './types';


interface StandingsRequestTypes {
  season?: number;
  league?: number;
  team?: number
}

export const standingsRequest = (standingsRequestTypes: StandingsRequestTypes) =>
  action(StandingsTypes.STANDINGS_REQUEST, {...standingsRequestTypes});

export const populateStandingsSuccess = (source: Standings[]) =>
  action(StandingsTypes.STANDINGS_REQUEST_SUCCESS, {source});

export const populateStandingsFailure = () =>
  action(StandingsTypes.STANDINGS_REQUEST_FAILURE, {source: []});
