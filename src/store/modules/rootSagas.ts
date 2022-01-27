import { all, fork } from 'redux-saga/effects';

import leagues from './leagues/sagas';

export default function* rootSaga() {
  return yield all([leagues]);
}
