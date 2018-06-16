import { combineReducers } from 'redux';
import postsContainer from '../screens/Posts/reducer';

const rootReducers = combineReducers({
  postsContainer,
});

export default rootReducers;
