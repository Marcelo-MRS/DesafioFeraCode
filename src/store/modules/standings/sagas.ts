import { takeLatest, call, put, all } from 'redux-saga/effects';
import { StandingsTypes, Standing } from './types';
import {Api} from '~/service';
import { standingsActions } from '~/store/modules'
import {navigate} from '~/service/navigationService';

interface Props {
  payload: Standing;
}

export function* getStandings({payload}: any) {
    try {
      const {season, league, team}= payload;
      const { data: {response} }=  yield call(Api.get, '/standings', {params: {season, league, team}});
      yield put (standingsActions.populateStandingsSuccess(response))
      navigate('Standing');
    } catch (error) {
      yield put (standingsActions.populateStandingsFailure())
    }
}


export default all ([takeLatest(StandingsTypes.STANDINGS_REQUEST, getStandings),]);
