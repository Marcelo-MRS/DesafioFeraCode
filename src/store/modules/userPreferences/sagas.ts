import { takeLatest, put, all } from 'redux-saga/effects';
import { leaguesActions} from '~/store/modules'
import { UserPreferencesTypes } from './types';

export function* updateCountry({payload}: any) {
    const {country} = payload;
    yield put(leaguesActions.leaguesRequest({code: country.code}));
}

export default all ([takeLatest(UserPreferencesTypes.UPDATE_COUNTRY_REQUEST, updateCountry),]);
