import { REQUEST_POSTS_SUCCESS } from './constants';

export const requestPostsSuccess = (posts) => ({
  type: REQUEST_POSTS_SUCCESS,
  posts,
});
