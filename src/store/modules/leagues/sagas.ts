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
      const {id, name, code, season}= payload;
      const { data: {response} }=  yield call(Api.get, '/leagues', {params: {id, name, code, season}});
      yield put (populateLeaguesSuccess(response))
    } catch (error) {
      yield put (populateLeaguesFailure())
    }
}


export default all ([takeLatest(LeagueTypes.LEAGUE_REQUEST, getLeagues),]);
