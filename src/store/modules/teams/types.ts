/**
 * Action types
 */

export enum TeamsTypes {
  TEAMS_REQUEST = '@teams/TEAMS_REQUEST',
  TEAMS_REQUEST_SUCCESS = '@teams/TEAMS_REQUEST_SUCCESS',
  TEAMS_REQUEST_FAILURE = '@teams/TEAMS_REQUEST_FAILURE',

}

/**
 * Data Types
 */

 export interface Team {
  id: Number;
  name: string;
  country: string;
  founded: string;
  national: string;
  logo: string;
}

interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}


export interface Teams {
  team: Team;
  venue: Venue;
}

/**
 * State types
 */

 export interface TeamsState {
  teams?: Teams[];
  loading: boolean;
}