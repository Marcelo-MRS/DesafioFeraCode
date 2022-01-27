import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { LeagueTypes, League, Leagues } from './types';
import {Api, SnackBarService} from '~/service';
import {populateLeaguesSuccess, populateLeaguesFailure} from './action'
import { AxiosResponse } from 'axios';


interface Props {
  payload: League;
}

export function* getLeagues({payload}: any) {
    try {
      const {username, password}= payload;
      const { data: {response} }=  yield call(Api.get, '/leagues', {params: {code: 'BR'}});
      yield put (populateLeaguesSuccess(response))
      console.tron.log('response', response)
    } catch (error) {
      yield put (populateLeaguesFailure())
    }
}


export default all ([takeLatest(LeagueTypes.LEAGUE_REQUEST, getLeagues),]);
