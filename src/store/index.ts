import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';
import persistReducers from './persistReducers';
import { AuthState } from './modules/auth/types';

export interface ApplicationState {
  auth: AuthState;
}

const sagaMonitor =  Reactotron.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
