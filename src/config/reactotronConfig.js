import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// let's connect!
const reactotron = Reactotron.configure()
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
  }) // add all built-in react native plugins
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();
reactotron.clear();
if (__DEV__) {
  console.tron = reactotron;
} else {
  console.tron = console;
}

export default reactotron;
