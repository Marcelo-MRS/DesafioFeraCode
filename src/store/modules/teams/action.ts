import { action } from 'typesafe-actions';

import { TeamsTypes, Teams } from './types';

interface TeamsRequestTypes {
  id?: number;
  name?: string;
  league?: number;
  season?: string;
  country?: string;
  search?: string;
}

export const teamsRequest = (teamsRequestTypes: TeamsRequestTypes) =>
  action(TeamsTypes.TEAMS_REQUEST, {...teamsRequestTypes});

export const populateTeamsSuccess = (source: Teams[]) =>
  action(TeamsTypes.TEAMS_REQUEST_SUCCESS, {source});

export const populateTeamsFailure = () =>
  action(TeamsTypes.TEAMS_REQUEST_FAILURE, {source: []});
