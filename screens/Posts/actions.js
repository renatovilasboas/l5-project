import {
  REQUEST_POSTS_SUCCESS,
  REQUEST_USERS_SUCCESS,
  REQUEST_POSTS,
  REQUEST_POSTS_FAIL,
} from './constants';

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const requestPostsSuccess = (posts) => ({
  type: REQUEST_POSTS_SUCCESS,
  posts,
});

export const requestPostsFail = (error) => ({
  type: REQUEST_POSTS_FAIL,
  error,
});

export const requestUsersSuccess = (users) => ({
  type: REQUEST_USERS_SUCCESS,
  users,
});
