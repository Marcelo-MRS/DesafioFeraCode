import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { TeamsTypes, Team, Teams } from './types';
import {Api, SnackBarService} from '~/service';
import {populateTeamsFailure, populateTeamsSuccess} from './action'
import { AxiosResponse } from 'axios';


interface Props {
  payload: Team;
}

export function* getTeams({payload}: any) {
    try {
      const {id, name, league, season, country, search}= payload;
      const { data: {response} }=  yield call(Api.get, '/teams', {params: {id, name, league, season, country, search}});
      yield put (populateTeamsSuccess(response))
      console.tron.log('response', response)
    } catch (error) {
      yield put (populateTeamsFailure())
    }
}


export default all ([takeLatest(TeamsTypes.TEAMS_REQUEST, getTeams),]);
