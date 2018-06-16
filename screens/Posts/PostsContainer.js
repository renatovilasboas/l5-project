import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import PostsScreen from './PostsScreen';
import { requestPosts, requestUsers } from './api';
import { requestPostsSuccess, requestUsersSuccess } from './actions';
import selector from './selector';

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

/* const mapStateToProps = (state) => ({
  postsToView: generatePostsToView(
    state.postsContainer.posts,
    state.postsContainer.users
  ),
}); */

const mapStateToProps = (state) => ({
  postsToView: selector(state),
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
