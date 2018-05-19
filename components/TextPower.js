import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  text: {
    fontSize: 20,
    color: 'red',
  },
};

export default function TextPower(props) {
  return <Text style={styles.text}>{props.title}</Text>;
}

TextPower.propTypes = {
  title: PropTypes.string.isRequired,
};
