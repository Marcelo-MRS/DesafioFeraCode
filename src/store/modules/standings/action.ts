import { action } from 'typesafe-actions';

import { StandingsTypes, Standings } from './types';

export const standingsRequest = (season:number, league:number, team?:number) =>
  action(StandingsTypes.STANDINGS_REQUEST, {season, league, team});

export const populateStandingsSuccess = (source: Standings[]) =>
  action(StandingsTypes.STANDINGS_REQUEST_SUCCESS, {source});

export const populateStandingsFailure = () =>
  action(StandingsTypes.STANDINGS_REQUEST_FAILURE, {source: []});
