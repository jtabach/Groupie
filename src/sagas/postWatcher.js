import { put, takeLatest, call } from 'redux-saga/effects';
import { postRequest } from './helpers/request';
import CONFIG from '../config';

import {
  CREATE_POST,
  CREATE_POST_COMPLETED,
  DELETE_POST,
  DELETE_POST_COMPLETED,
  EDIT_POST,
  EDIT_POST_COMPLETED
} from '../types/postTypes';

function* createPostRequest(action) {
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/post`,
    action.payload
  );
  if (response.post) {
    yield put({ type: CREATE_POST_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to create post');
  }
}

function* deletePostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/post/delete',
    action.payload
  );
  if (response.post) {
    yield put({ type: DELETE_POST_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to delete post');
  }
}

function* editPostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/post/edit',
    action.payload
  );
  if (response.post) {
    yield put({ type: EDIT_POST_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to edit post');
  }
}

export function* postWatcher() {
  yield takeLatest(CREATE_POST, createPostRequest);
  yield takeLatest(DELETE_POST, deletePostRequest);
  yield takeLatest(EDIT_POST, editPostRequest);
}
