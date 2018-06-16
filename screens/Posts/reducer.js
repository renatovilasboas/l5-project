import { REQUEST_POSTS_SUCCESS } from './constants';

const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS_SUCCESS:
      return { posts: action.posts };

    default:
      return state;
  }
};

export default reducer;
