import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
  avatar: {
    fontSize: 18,
    marginLeft: 12,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 24,
    height: 24,
  },
  infoUser: {
    flex: 1,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    margin: 10,
  },
});

const TextPower = (props) => {
  const { post } = props;

  return (
    <Card key={`card${post.id}`} style={styles.card}>
      <TouchableHighlight onPress={() => props.handleClick(post)}>
        <View style={{ margin: 10 }}>
          <Text style={styles.avatar}>{post.title}</Text>
          <View style={styles.infoUser}>
            <View>
              <Image
                borderRadius={50}
                style={styles.image}
                source={{ uri: post.photo }}
              />
            </View>
            <Paragraph>{post.name}</Paragraph>
          </View>
        </View>
      </TouchableHighlight>
    </Card>
  );
};

export default TextPower;

TextPower.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};
