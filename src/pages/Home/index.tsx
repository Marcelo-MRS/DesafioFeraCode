import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Api, SnackBarService} from '~/service';
import {leaguesRequest} from '~/store/modules/leagues/action'
import {countriesRequest} from '~/store/modules/countries/action'
import {seasonsRequest} from '~/store/modules/seasons/action'
import {teamsRequest} from '~/store/modules/teams/action'
import {standingsRequest} from '~/store/modules/standings/action'


import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(leaguesRequest())
    dispatch(countriesRequest())
    dispatch(seasonsRequest())
    dispatch(teamsRequest(50))
    dispatch(standingsRequest(2020, 39))

  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
