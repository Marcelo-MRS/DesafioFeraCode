import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import { Store } from 'redux';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';
import persistReducers from './persistReducers';
import { CountryState } from './modules/countries/types';
import { LeagueState } from './modules/leagues/types';
import { SeasonState } from './modules/seasons/types';
import { StandingsState } from './modules/standings/types';
import { TeamsState } from './modules/teams/types';

export interface ApplicationState {
  countries: CountryState;
  leagues: LeagueState;
  seasons: SeasonState;
  standings: StandingsState;
  teams: TeamsState;
}

const sagaMonitor =  Reactotron.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store: Store<ApplicationState> = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
