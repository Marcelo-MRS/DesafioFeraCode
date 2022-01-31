import { action } from 'typesafe-actions';

import { LeagueTypes, Leagues } from './types';

interface LeagueRequestTypes {
  id?: number;
  name?: string;
  code?: string;
  season?: number;
}

export const leaguesRequest = (leagueValues?: LeagueRequestTypes) =>
  action(LeagueTypes.LEAGUE_REQUEST, leagueValues);

export const populateLeaguesSuccess = (source: Leagues[]) =>
  action(LeagueTypes.LEAGUE_REQUEST_SUCCESS, {source});

export const populateLeaguesFailure = () =>
  action(LeagueTypes.LEAGUE_REQUEST_FAILURE, {source: []});
