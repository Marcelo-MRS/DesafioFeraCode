import { all, fork } from 'redux-saga/effects';

import leagues from './leagues/sagas';
import countries from './countries/sagas';
import seasons from './seasons/sagas';
import teams from './teams/sagas';
import standings from './standings/sagas';

export default function* rootSaga() {
  return yield all([leagues, countries, seasons, teams, standings]);
}
