import { put, takeLatest, call } from 'redux-saga/effects';
import { commentApi } from './api';

import {
  CREATE_COMMENT,
  CREATE_COMMENT_COMPLETED,
  CREATE_COMMENT_FAILED
} from '../types/commentTypes';

export function* createCommentRequest(action) {
  try {
    const response = yield call(commentApi.createComment, action);
    yield put({ type: CREATE_COMMENT_COMPLETED, payload: { data: response } });
  } catch (err) {
    yield put({ type: CREATE_COMMENT_FAILED, error: err });
  }
}

export function* commentWatcher() {
  yield takeLatest(CREATE_COMMENT, createCommentRequest);
}
