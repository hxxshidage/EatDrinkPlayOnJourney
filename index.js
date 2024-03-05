/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// YellowBox.ignoreWarnings(['Warning:ViewPagerAndroid has been extracted from react-native core and will be removed...']);
// console.ignoredYellowBox = ['Warning:ViewPagerAndroid has been extracted from react-native core and will be removed...'];
// console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
