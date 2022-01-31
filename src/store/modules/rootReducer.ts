import { combineReducers } from 'redux';

import leagues from './leagues/reducer';
import countries from './countries/reducer';
import seasons from './seasons/reducer';
import teams from './teams/reducer';
import standings from './standings/reducer';
import userPreferences from './userPreferences/reducer';
import globalModal from './globalModal/reducer';

export default combineReducers({
  leagues,
  countries,
  seasons,
  teams,
  standings,
  userPreferences,
  globalModal,
});
