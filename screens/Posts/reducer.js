import { REQUEST_POSTS_SUCCESS, REQUEST_USERS_SUCCESS } from './constants';

const initialState = {
  users: [],
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS_SUCCESS:
      return { posts: action.posts, users: [...state.users] };

    case REQUEST_USERS_SUCCESS:
      return { users: action.users, posts: [...state.posts] };

    default:
      return state;
  }
};

export default reducer;
