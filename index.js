/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import './src/config/reactotronConfig';

AppRegistry.registerComponent(appName, () => App);
