import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { renderScene, routes } from './routes';

type Props = {};
export default class Menu extends Component<Props> {
  constructor() {
    super();

    /* eslint-disable */
    this.state = {
      index: 0,
      routes: [...routes],
    };
  }

  handleIndexChange = (index) => this.setState({ index });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={renderScene}
      />
    );
  }
}
