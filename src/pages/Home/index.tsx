import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SnackBarSevice from '~/service/snackBarSevice';

import styles from './styles';

const Home: React.FC = () => {
  useEffect(() => {
    SnackBarSevice.exibe('teste', 'red');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;
