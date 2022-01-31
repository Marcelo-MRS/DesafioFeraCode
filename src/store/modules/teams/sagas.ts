import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { TeamsTypes, Team, Teams } from './types';
import {Api, SnackBarService} from '~/service';
import { teamsActions } from '~/store/modules'
import { AxiosResponse } from 'axios';


interface Props {
  payload: Team;
}

export function* getTeams({payload}: any) {
    try {
      const {id, name, league, season, country, search}= payload;
      const { data: {response} }=  yield call(Api.get, '/teams', {params: {id, name, league, season, country, search}});
      yield put (teamsActions.populateTeamsSuccess(response))
    } catch (error) {
      yield put (teamsActions.populateTeamsFailure())
    }
}


export default all ([takeLatest(TeamsTypes.TEAMS_REQUEST, getTeams),]);
