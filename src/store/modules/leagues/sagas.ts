import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { LeagueTypes, League, Leagues } from './types';
import {Api, SnackBarService} from '~/service';
import { leaguesActions } from '~/store/modules'
import { AxiosResponse } from 'axios';


interface Props {
  payload: League;
}

export function* getLeagues({payload}: any) {
    try {
      const {id, name, code, season}= payload;
      const { data: {response} }=  yield call(Api.get, '/leagues', {params: {id, name, code, season}});
      yield put (leaguesActions.populateLeaguesSuccess(response))
    } catch (error) {
      yield put (leaguesActions.populateLeaguesFailure())
    }
}


export default all ([takeLatest(LeagueTypes.LEAGUE_REQUEST, getLeagues),]);
