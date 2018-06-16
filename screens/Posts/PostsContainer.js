import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import PostsScreen from './PostsScreen';
import { requestPosts, requestUsers } from './api';
import { requestPostsSuccess, requestUsersSuccess } from './actions';

const photos = [
  {
    id: 1,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 2,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/g03.png',
  },
  {
    id: 3,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/g03.png',
  },
  {
    id: 4,
    photo:
      'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18350.png',
  },
  {
    id: 5,
    photo:
      'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18341.png',
  },
  {
    id: 6,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 7,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 8,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 9,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 10,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
];

type Props = {};
class PostsContainer extends Component<Props> {
  async componentDidMount() {
    const { requestPostsSuccess, requestUsersSuccess } = this.props;
    const posts = await requestPosts();
    requestPostsSuccess(posts);
    const users = await requestUsers();
    requestUsersSuccess(users);
  }

  render() {
    const { postsToView } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <PostsScreen {...this.props} posts={postsToView} keyNameId="id" />
      </View>
    );
  }
}

const generatePostsToView = (posts, users) => {
  const postsToView = [];

  posts.forEach((post) => {
    const user = users.find((x) => x.id === post.userId);
    const photoUser = photos.find((x) => x.id === post.userId);

    postsToView.push({
      userId: user.id,
      id: post.id,
      name: user.name,
      photo: photoUser.photo,
      title: post.title,
      body: post.body,
    });
  });

  return postsToView;
};

const mapStateToProps = (state) => ({
  postsToView: generatePostsToView(
    state.postsContainer.posts,
    state.postsContainer.users
  ),
});

const mapDispatchToProps = {
  requestPostsSuccess,
  requestUsersSuccess,
};

PostsContainer.propTypes = {
  postsToView: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  requestPostsSuccess: PropTypes.func.isRequired,
  requestUsersSuccess: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
