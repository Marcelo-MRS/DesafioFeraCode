import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { SeasonTypes } from './types';
import {Api, SnackBarService} from '~/service';
import {populateSeasonsSuccess, populateSeasonsFailure} from './action'


export function* getSeasons({payload}: any) {
    try {
      const { data: {response} }=  yield call(Api.get, '/leagues/seasons');
      yield put (populateSeasonsSuccess(response))
      console.tron.log('response', response)
    } catch (error) {
      console.tron.log('error', error)
      yield put (populateSeasonsFailure())
    }
}


export default all ([takeLatest(SeasonTypes.SEASON_REQUEST, getSeasons),]);
