import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Standing, Detail} from '~/pages';
import { View, Text } from 'react-native';
import { HeaderButtonComponent } from '~/components';

type StackParamList = {
  Home: undefined;
  Standing: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const Routes: React.FC = () => {
  return (
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
        options={({navigation}) => ({
          headerTransparent: true,
          title: '',
          headerLeft: () => <HeaderButtonComponent navigation={navigation} />
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({navigation}) => ({
          headerTransparent: true,
          title: '',
          headerLeft: () => <HeaderButtonComponent navigation={navigation} />
        })}
      />
    </Stack.Navigator>
  );
}

export default Routes;
