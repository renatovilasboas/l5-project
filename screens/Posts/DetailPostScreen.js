import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    margin: 10,
  },
});

const PostDetail = (props) => {
  const { navigation } = props;
  const post = navigation.getParam('post');

  return (
    <Card style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>{post.title}</Text>
        <Paragraph>{post.name}</Paragraph>
        <Paragraph>{post.body}</Paragraph>
      </View>
    </Card>
  );
};

export default PostDetail;
