import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '~/pages';

type StackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const Routes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);

export default Routes;
