/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import TextPower from './components/TextPower';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Paragraph,
} from 'react-native-paper';

const MyComponent = () => (
  <Card>
    <CardContent>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </CardContent>
    <CardCover source={{ uri: 'https://picsum.photos/700' }} />
    <CardActions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </CardActions>
  </Card>
);

const NOME1 = 'TESTE1 OI OI ';
const NOME2 = 'TESTE2';
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\n Cmd+D or ${NOME1} shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\n
    Shake or press menu button for dev menu ${NOME1} ${NOME2}  `,
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json });
        console.log(json);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <MyComponent />
        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TextPower title={item.title} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
