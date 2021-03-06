import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { StandingsTypes, Standing } from './types';
import {Api, SnackBarService} from '~/service';
import { standingsActions, userPreferencesActions } from '~/store/modules'
import {navigate} from '~/service/navigationService';
import {standingsTypedSelector} from '~/store/modules/standings/reducer';

interface Props {
  payload: Standing;
}

export function* getStandings({payload}: any) {
    try {
      const {season, league, team}= payload;
      const {standings, league : leagues} = yield select(state => state.standings);
      const { data: {response} }=  yield call(Api.get, '/standings', {params: {season, league, team}});
      //treating response
      if (response.length === 0){
        SnackBarService.exibe('Não encontramos classificações para os parâmetros informados.', 'red');
      }

      let newLeague: any = {...response[0].league}
      let newStandings = [...newLeague?.standings[0]]
      delete newLeague.standings;
      
      yield put (standingsActions.populateStandingsSuccess({league: newLeague, standings: newStandings }))
      yield put (userPreferencesActions.updateOfflineAccess('league', newLeague))
      yield put (userPreferencesActions.updateOfflineAccess('standings', newStandings))
      navigate('Standing');
    } catch (error) {
      yield put (standingsActions.populateStandingsFailure())
    }
}


export default all ([takeLatest(StandingsTypes.STANDINGS_REQUEST, getStandings),]);
