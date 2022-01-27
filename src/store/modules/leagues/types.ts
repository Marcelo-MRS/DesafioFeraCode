/**
 * Action types
 */

export enum LeagueTypes {
  LEAGUE_REQUEST = '@leagues/LEAGUE_REQUEST',
  LEAGUE_REQUEST_SUCCESS = '@leagues/LEAGUE_REQUEST_SUCCESS',
  LEAGUE_REQUEST_FAILURE = '@leagues/LEAGUE_REQUEST_FAILURE',

}

/**
 * Data Types
 */

 export interface League {
  id: Number;
  name: string;
  type: string;
  logo: string;
}

interface Country {
  name: string;
  code: string;
  flag: string;
}

interface Seasons {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: object;
}

export interface Leagues {
  league: League;
  country: Country;
  seasons: Array<Seasons>;
}

/**
 * State types
 */

 export interface LeagueState {
  leagues?: Array<Leagues>;
  loading: boolean;
}