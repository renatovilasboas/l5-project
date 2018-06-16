import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { renderScene, routes } from './routes';

export default class Menu extends Component {
  constructor() {
    super();

    /* eslint-disable */
    this.state = {
      index: 0,
      routes: [...routes],
    };
  }

  handleIndexChange(index) {
    this.setState({ index });
  }

  render() {
    const scenes = renderScene(this.props);

    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={(index) => this.handleIndexChange(index)}
        renderScene={scenes}
      />
    );
  }
}
