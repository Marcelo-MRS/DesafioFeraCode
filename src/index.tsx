import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import { store, persistor } from './store';

import {ModalGlobalComponent} from '~/components';
import { navigationRef } from './service/navigationService';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
        <ModalGlobalComponent />
      </PersistGate>
    </Provider>

  );
};

export default App;
