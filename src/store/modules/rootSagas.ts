import { all } from 'redux-saga/effects';

import leagues from './leagues/sagas';
import countries from './countries/sagas';
import seasons from './seasons/sagas';
import teams from './teams/sagas';
import standings from './standings/sagas';
import userPreferences from './userPreferences/sagas';

export default function* rootSaga(): Generator {
  return yield all([leagues, countries, seasons, teams, standings, userPreferences]);
}
