import { put, takeLatest, call } from 'redux-saga/effects';
import { authApi } from './api/index'; // code editor bug, must add index path :/

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
  try {
    const response = yield call(authApi.loginUser, action);
    yield put({ type: LOGIN_USER_COMPLETED, payload: { data: response } });
  } catch (err) {
    yield put({ type: LOGIN_USER_FAILED, error: err });
  }
}

export function* registerUserRequest(action) {
  try {
    const response = yield call(authApi.registerUser, action);
    yield put({ type: REGISTER_USER_COMPLETED, payload: { data: response } });
  } catch (err) {
    yield put({ type: REGISTER_USER_FAILED, error: err });
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

export function* fetchUserRequest() {
  try {
    const response = yield call(authApi.fetchUser);
    yield put({ type: FETCH_USER_COMPLETED, payload: { data: response } });
  } catch (err) {
    yield put({ type: FETCH_USER_FAILED, error: err });
  }
}

export function* authWatcher() {
  yield takeLatest(LOGIN_USER, loginUserRequest);
  yield takeLatest(REGISTER_USER, registerUserRequest);
  yield takeLatest(LOGOUT_USER, logoutUserRequest);
  yield takeLatest(FETCH_USER, fetchUserRequest);
}
