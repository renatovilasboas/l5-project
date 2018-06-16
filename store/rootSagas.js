import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_POSTS } from '../screens/Posts/constants';
import {
  requestPostsFail,
  requestPostsSuccess,
  requestUsersSuccess,
} from '../screens/Posts/actions';
import { requestPosts, requestUsers } from '../screens/Posts/api';

function* fetchPosts() {
  try {
    const posts = yield call(requestPosts);
    const users = yield call(requestUsers);

    yield put(requestPostsSuccess(posts));
    yield put(requestUsersSuccess(users));
  } catch (error) {
    yield put(requestPostsFail(error));
  }
}

function* rootSagas() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
}

export default rootSagas;
