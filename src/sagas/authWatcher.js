import { put, takeLatest, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';
import { authApi } from './api/index'; // code editor bug, must add index path :/

import CONFIG from '../config';

import {
  LOGIN_USER,
  LOGIN_USER_COMPLETED,
  LOGIN_USER_FAILED,
  FETCH_USER,
  FETCH_USER_COMPLETED,
  FETCH_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_COMPLETED,
  REGISTER_USER_FAILED,
  LOGOUT_USER,
  LOGOUT_USER_COMPLETED
} from '../types/authTypes';

export function* loginUserRequest(action) {
  const response = yield call(authApi.loginUser, action);

  if (response.user) {
    yield put({ type: LOGIN_USER_COMPLETED, payload: { data: response } });
  } else {
    yield put({ type: LOGIN_USER_FAILED, payload: { data: response } });
  }
}

export function* registerUserRequest(action) {
  const response = yield call(authApi.registerUser, action);

  if (response.user) {
    yield put({ type: REGISTER_USER_COMPLETED, payload: { data: response } });
  } else {
    yield put({ type: REGISTER_USER_FAILED, payload: { data: response } });
  }
}

export function* logoutUserRequest(action) {
  const response = yield call(authApi.logoutUser, action);

  if (!response.user) {
    yield put({ type: LOGOUT_USER_COMPLETED, payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed logout');
  }
}

function* fetchUserRequest() {
  const response = yield call(authApi.fetchUser);

  if (response.user) {
    yield put({ type: FETCH_USER_COMPLETED, payload: { data: response } });
  } else {
    yield put({ type: FETCH_USER_FAILED, payload: { data: response } });
  }
}

export function* authWatcher() {
  yield takeLatest(LOGIN_USER, loginUserRequest);
  yield takeLatest(REGISTER_USER, registerUserRequest);
  yield takeLatest(LOGOUT_USER, logoutUserRequest);
  yield takeLatest(FETCH_USER, fetchUserRequest);
}
