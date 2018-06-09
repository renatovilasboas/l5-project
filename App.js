/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import Posts from './screens/Posts';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';

const Cabecalho = styled.View`
  background-color: #3498db;
  flex: 0.6;
`;

const Body = styled.View`
  flex: 7;
`;

const Rodape = styled.View`
  flex: 1;
  background-color: #3498db;
  flex-direction: row;
`;

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      index: 0,
      routes: [
        { key: 'music', title: 'Music', icon: 'queue-music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
      ],
    };
  }

  handleIndexChange = (index) => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    music: Posts,
    albums: Screen2,
    recents: Screen3,
  });

  render() {
    return (
      <View style={styles.container}>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
