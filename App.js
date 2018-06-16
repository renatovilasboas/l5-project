/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Main from './screens/Menu/Main';
import theme from './screens/Menu/theme';
import DetailPostScreen from './screens/Posts/DetailPostScreen';

const App = (props) => (
  <View style={styles.container}>
    <Main {...props} />
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
    Home: {
      screen: App,
      navigationOptions: {
        title: 'Posts',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },

    DetailPost: {
      screen: DetailPostScreen,
      navigationOptions: {
        title: 'Post',
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
