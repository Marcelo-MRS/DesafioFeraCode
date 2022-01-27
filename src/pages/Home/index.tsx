import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Api, SnackBarService} from '~/service';
import {leaguesRequest} from '~/store/modules/leagues/action'


import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(leaguesRequest('teste', 'teste'))
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
