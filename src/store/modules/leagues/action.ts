import { action } from 'typesafe-actions';

import { LeagueTypes, Leagues } from './types';

export const leaguesRequest = (id?: number, name?: string, code?:string, season?: number) =>
  action(LeagueTypes.LEAGUE_REQUEST, { id, name, code, season });

export const populateLeaguesSuccess = (source: Leagues[]) =>
  action(LeagueTypes.LEAGUE_REQUEST_SUCCESS, {source});

export const populateLeaguesFailure = () =>
  action(LeagueTypes.LEAGUE_REQUEST_FAILURE, {source: []});
