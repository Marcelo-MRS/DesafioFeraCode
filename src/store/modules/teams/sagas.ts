import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { TeamsTypes, Team } from './types';
import {Api} from '~/service';
import { teamsActions, userPreferencesActions } from '~/store/modules'
import { navigate } from '~/service/navigationService';

interface Props {
  payload: Team;
}

export function* getTeams({payload}: any) {
    try {
      const {id, name, league, season, country, search}= payload;
      const {teams} = yield select(state => state.teams);
      if(teams.length === 0){
        const { data: {response} }=  yield call(Api.get, '/teams', {params: {id, name, league, season, country, search}});
        yield put (teamsActions.populateTeamsSuccess(response))
        yield put (userPreferencesActions.updateOfflineAccess('teams', response))
      } else {
        yield put (teamsActions.populateTeamsSuccess(teams))
        yield put (userPreferencesActions.updateOfflineAccess('teams', teams))
      }
      navigate('Detail')
    } catch (error) {
      yield put (teamsActions.populateTeamsFailure())
    }
}


export default all ([takeLatest(TeamsTypes.TEAMS_REQUEST, getTeams),]);
