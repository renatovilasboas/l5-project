/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import meusItems from './testImport';

const NOME1 = 'TESTE1 OI OI ';
const NOME2 = 'TESTE2';
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\n Cmd+D or ${NOME1} shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\n
    Shake or press menu button for dev menu ${NOME1} ${NOME2}  `,
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log('oi');
    const clientes = [
      { id: 1, nome: 'Joao' },
      { id: 2, nome: 'Jose' },
      { id: 3, nome: 'Maria' },
      { id: 4, nome: 'Felipe' },
      { id: 5, nome: 'Matheus' },
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! Hello!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>{meusItems.Item1()}</Text>
        <Text>{meusItems.minhaFuncao()}</Text>
        <Text>{meusItems.Item3()}</Text>
        {meusItems.renterItems(clientes)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
