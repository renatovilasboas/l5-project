import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import TextPower from '../../components/TextPower';

const PostsScreen = (props) => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={props.posts}
      keyExtractor={(item) => item[props.keyNameId].toString()}
      renderItem={({ item }) => (
        <TextPower
          post={item}
          handleClick={(post) =>
            props.navigation.navigate('DetailPost', { post })
          }
        />
      )}
    />
  </View>
);

PostsScreen.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  keyNameId: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default PostsScreen;
