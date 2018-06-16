import { REQUEST_POSTS_SUCCESS, REQUEST_USERS_SUCCESS } from './constants';

export const requestPostsSuccess = (posts) => ({
  type: REQUEST_POSTS_SUCCESS,
  posts,
});

export const requestUsersSuccess = (users) => ({
  type: REQUEST_USERS_SUCCESS,
  users,
});
