import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { StandingsTypes, Standing } from './types';
import {Api} from '~/service';
import { standingsActions } from '~/store/modules'
import {navigate} from '~/service/navigationService';
import {standingsTypedSelector} from '~/store/modules/standings/reducer';

interface Props {
  payload: Standing;
}

export function* getStandings({payload}: any) {
    try {
      const {season, league, team}= payload;
      const {standings, league : leagues} = yield select(state => state.standings);
      if(standings.length === 0){
        const { data: {response} }=  yield call(Api.get, '/standings', {params: {season, league, team}});
        //treating response
        let newLeague: any = {...response[0].league}
        let newStandings = [...newLeague?.standings[0]]
        delete newLeague.standings;
        console.tron.log({league: newLeague, standings: newStandings });
        yield put (standingsActions.populateStandingsSuccess({league: newLeague, standings: newStandings }))
      } else {
        yield put (standingsActions.populateStandingsSuccess({league: leagues, standings }))
      }
      
      navigate('Standing');
    } catch (error) {
      yield put (standingsActions.populateStandingsFailure())
    }
}


export default all ([takeLatest(StandingsTypes.STANDINGS_REQUEST, getStandings),]);
