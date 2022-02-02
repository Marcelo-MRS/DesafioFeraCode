/**
 * Action types
 */

export enum SeasonTypes {
  SEASON_REQUEST = '@seasons/SEASON_REQUEST',
  SEASON_REQUEST_SUCCESS = '@seasons/SEASON_REQUEST_SUCCESS',
  SEASON_REQUEST_FAILURE = '@seasons/SEASON_REQUEST_FAILURE',

}

/**
 * Data Types
 */


/**
 * State types
 */

 export interface SeasonState {
  seasons?: Array<number>;
  loading: boolean;
}