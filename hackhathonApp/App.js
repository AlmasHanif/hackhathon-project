/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  ImageBackground,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/styling';
import logo from './assets/images/car_logo.jpg';
import AppNavigation from './config/Routing';
import {Provider} from 'react-redux';
// import style from './styles/styling';
const App = () => {
  return (
    // <Provider store={store}>
    <AppNavigation />
    // {/* </Provider> */}
  );
};

export default App;
