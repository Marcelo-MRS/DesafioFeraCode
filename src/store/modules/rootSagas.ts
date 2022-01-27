import { all, fork } from 'redux-saga/effects';

import leagues from './leagues/sagas';
import countries from './countries/sagas';
import seasons from './seasons/sagas';

export default function* rootSaga() {
  return yield all([leagues, countries, seasons]);
}
