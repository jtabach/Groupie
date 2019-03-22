import { put, takeLatest, call } from 'redux-saga/effects';
import { commentApi } from './api';

import {
  CREATE_COMMENT,
  CREATE_COMMENT_COMPLETED
} from '../types/commentTypes';

export function* createCommentRequest(action) {
  const response = yield call(commentApi.createComment, action);
  if (response.comment) {
    yield put({ type: CREATE_COMMENT_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to create comment');
  }
}

export function* commentWatcher() {
  yield takeLatest(CREATE_COMMENT, createCommentRequest);
}
