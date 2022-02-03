import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Standing, Detail} from '~/pages';

type StackParamList = {
  Home: undefined;
  Standing: undefined;
  Detail: undefined;
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
    <Stack.Screen
      name="Standing"
      component={Standing}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
    />
  </Stack.Navigator>
);

export default Routes;
