import { combineReducers } from 'redux';

import leagues from './leagues/reducer';
import countries from './countries/reducer';
import seasons from './seasons/reducer';
import teams from './teams/reducer';
import standings from './standings/reducer';

export default combineReducers({
  leagues,
  countries,
  seasons,
  teams,
  standings
});
