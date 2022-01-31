import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { SeasonTypes } from './types';
import {Api, SnackBarService} from '~/service';
import { seasonsActions } from '~/store/modules'

export function* getSeasons({payload}: any) {
    try {
      const { data: {response} }=  yield call(Api.get, '/leagues/seasons');
      yield put (seasonsActions.populateSeasonsSuccess(response))
    } catch (error) {
      yield put (seasonsActions.populateSeasonsFailure())
    }
}


export default all ([takeLatest(SeasonTypes.SEASON_REQUEST, getSeasons),]);
