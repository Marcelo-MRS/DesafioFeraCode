import { action } from 'typesafe-actions';

import { TeamsTypes, Teams } from './types';

export const teamsRequest = (id?:number, name?:string, league?:number, season?:number, country?:string, search?:string) =>
  action(TeamsTypes.TEAMS_REQUEST, {id, name, league, season, country, search});

export const populateTeamsSuccess = (source: Teams[]) =>
  action(TeamsTypes.TEAMS_REQUEST_SUCCESS, {source});

export const populateTeamsFailure = () =>
  action(TeamsTypes.TEAMS_REQUEST_FAILURE, {source: []});
