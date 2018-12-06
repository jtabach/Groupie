import { put, takeLatest, call } from 'redux-saga/effects';
import { postRequest } from './helpers/request';

import {
  LIKE_POST,
  LIKE_POST_COMPLETED,
  DELETE_LIKE_POST,
  DELETE_LIKE_POST_COMPLETED
} from '../types/likeTypes';

function* likePostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/like',
    action.payload
  );
  if (response.like) {
    yield put({ type: LIKE_POST_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to like post');
  }
}

function* unlikePostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/like/delete',
    action.payload
  );
  if (response.like) {
    yield put({
      type: DELETE_LIKE_POST_COMPLETED,
      payload: { data: response }
    });
  } else {
    console.log('handle failed to delete like post');
  }
}

export function* likeWatcher() {
  yield takeLatest(LIKE_POST, likePostRequest);
  yield takeLatest(DELETE_LIKE_POST, unlikePostRequest);
}
