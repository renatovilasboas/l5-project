import React from 'react';
import { Text } from 'react-native';

const myValue = 40;

function Item4() {
  return myValue * 2;
}

const Item1 = (): number => myValue * 3;

const Item2 = () => myValue * 4;

const Item3 = () => myValue * 5;

const renterItems = (array) =>
  array.map((client) => <Text key={`${client.id}`}>{client.nome}</Text>);

export default {
  minhaFuncao: Item2,
  Item1,
  Item3,
  renterItems,
  strings: {
    Item1,
  },
};
