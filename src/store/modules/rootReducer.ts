import { combineReducers } from 'redux';

import leagues from './leagues/reducer';
import countries from './countries/reducer';
import seasons from './seasons/reducer';

export default combineReducers({
  leagues,
  countries,
  seasons,
});
