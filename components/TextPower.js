import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, CardContent, Paragraph } from 'react-native-paper';

export default function TextPower(props) {
  const { post } = props;

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
      marginLeft: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  });

  return (
    <Card key={`card${post.id}`} style={{ marginBottom: 8 }}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}

TextPower.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
