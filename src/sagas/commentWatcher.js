import { put, takeLatest, call } from 'redux-saga/effects';
import { postRequest } from './helpers/request';

import CONFIG from '../config';

import {
  CREATE_COMMENT,
  CREATE_COMMENT_COMPLETED
} from '../types/commentTypes';

function* createCommenttRequest(action) {
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/comment`,
    action.payload
  );
  if (response.comment) {
    yield put({ type: CREATE_COMMENT_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to create comment');
  }
}

export function* commentWatcher() {
  yield takeLatest(CREATE_COMMENT, createCommenttRequest);
}
