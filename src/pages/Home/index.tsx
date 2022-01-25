import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Api, SnackBarService} from '~/service';

import styles from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    SnackBarService.exibe('teste', 'red');
    Api.get('/standingss');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
