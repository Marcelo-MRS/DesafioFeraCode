import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Api, SnackBarService} from '~/service';
import {leaguesRequest} from '~/store/modules/leagues/action'
import {countriesRequest} from '~/store/modules/countries/action'
import {seasonsRequest} from '~/store/modules/seasons/action'


import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(leaguesRequest())
    dispatch(countriesRequest())
    dispatch(seasonsRequest())
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
