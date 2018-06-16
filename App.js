/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MenuContainer from './screens/Menu/MenuContainer';

const App = () => (
  <View style={styles.container}>
    <MenuContainer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default createStackNavigator(
  {
    Home: App,
  },
  {
    initialRouteName: 'Home',
  }
);
