/**
 * Action types
 */

import { AllButLast } from "redux-saga/effects";

export enum StandingsTypes {
  STANDINGS_REQUEST = '@standings/STANDINGS_REQUEST',
  STANDINGS_REQUEST_SUCCESS = '@standings/STANDINGS_REQUEST_SUCCESS',
  STANDINGS_REQUEST_FAILURE = '@standings/STANDINGS_REQUEST_FAILURE',

}

/**
 * Data Types
 */


 export interface Team {
  id: Number;
  name: string;
  logo: string;
}

export interface Goals {
  for: number;
  against: number;
}

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;

}
export interface Home {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Away {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

 export interface Standing {
  rank: Number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: All;
  home: Home;
  away: Away;
  update: string;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Standing[];
}


export interface Standings {
  league: League[];
}

/**
 * State types
 */

 export interface StandingsState {
  standings?: Standings[];
  loading: boolean;
}