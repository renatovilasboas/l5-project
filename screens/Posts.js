import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import TextPower from '../components/TextPower';

const Posts = (props) => {
  const { posts, keyNameId } = props;

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item[keyNameId].toString()}
      renderItem={({ item }) => <TextPower post={item} />}
    />
  );
};

Posts.propTypes = {
  posts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  keyNameId: PropTypes.string.isRequired,
};

export default Posts;
