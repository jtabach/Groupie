import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import {
  loginUserRequest,
  registerUserRequest,
  logoutUserRequest,
  fetchUserRequest
} from '../authWatcher';
import { authApi } from '../api/index'; // code editor bug, must add index path :/

describe('AuthWatcher', () => {
  describe('LoginUser', () => {
    let fakeUser;
    let fakePayload;
    let fakeError;

    beforeEach(() => {
      fakeUser = {
        user: { email: 'a@a.com', firstName: 'John', lastName: 'Doe' }
      };
      fakePayload = { email: 'a@a.com', password: 'password' };
      fakeError = { user: false };
    });

    it('successful and returns user data', () => {
      return expectSaga(loginUserRequest, authApi)
        .provide({
          call(effect) {
            if (effect.fn === authApi.loginUser) {
              return fakeUser;
            }
          }
        })
        .put({
          type: 'LOGIN_USER_COMPLETED',
          payload: { data: fakeUser }
        })
        .dispatch({ type: 'LOGIN_USER', payload: fakePayload })
        .run();
    });

    it('handles errors', () => {
      return expectSaga(loginUserRequest, authApi)
        .provide({
          call(effect) {
            if (effect.fn === authApi.loginUser) {
              return fakeError;
            }
          }
        })
        .put({
          type: 'LOGIN_USER_FAILED',
          payload: { data: fakeError }
        })
        .dispatch({ type: 'LOGIN_USER', payload: fakePayload })
        .run();
    });
  });

  describe('RegisterUser', () => {
    let fakeUser;
    let fakePayload;
    let fakeError;

    beforeEach(() => {
      fakeUser = {
        user: { email: 'a@a.com', firstName: 'John', lastName: 'Doe' }
      };
      fakePayload = {
        email: 'a@a.com',
        firstName: 'John',
        lasName: 'Doe',
        password: 'password'
      };
      fakeError = { user: false };
    });

    it('successful and returns user data', () => {
      return expectSaga(registerUserRequest, authApi)
        .provide({
          call(effect) {
            if (effect.fn === authApi.registerUser) {
              return fakeUser;
            }
          }
        })
        .put({
          type: 'REGISTER_USER_COMPLETED',
          payload: { data: fakeUser }
        })
        .dispatch({ type: 'REGISTER_USER', payload: fakePayload })
        .run();
    });

    it('handles errors', () => {
      return expectSaga(registerUserRequest, authApi)
        .provide({
          call(effect) {
            if (effect.fn === authApi.registerUser) {
              return fakeError;
            }
          }
        })
        .put({
          type: 'REGISTER_USER_FAILED',
          payload: { data: fakeError }
        })
        .dispatch({ type: 'REGISTER_USER', payload: fakePayload })
        .run();
    });
  });

  describe('LogoutUser', () => {
    let fakeUser;
    let fakePayload;

    beforeEach(() => {
      fakeUser = { user: false };
      fakePayload = {};
    });

    it('successful logs out user', () => {
      return expectSaga(logoutUserRequest, authApi)
        .provide({
          call(effect) {
            if (effect.fn === authApi.logoutUser) {
              return fakeUser;
            }
          }
        })
        .put({
          type: 'LOGOUT_USER_COMPLETED',
          payload: { data: fakeUser }
        })
        .dispatch({ type: 'LOGOUT_USER', payload: fakePayload })
        .run();
    });
  });

  describe('FetchUser', () => {
    let fakeUser;
    let fakePayload;
    let fakeError;

    beforeEach(() => {
      fakeUser = {
        user: { email: 'a@a.com', firstName: 'John', lastName: 'Doe' }
      };
      fakePayload = {};
      fakeError = { user: false };
    });

    it('successful gets user data', () => {
      return expectSaga(fetchUserRequest, authApi)
        .provide({
          call(effect) {
            if (effect.fn === authApi.fetchUser) {
              return fakeUser;
            }
          }
        })
        .put({
          type: 'FETCH_USER_COMPLETED',
          payload: { data: fakeUser }
        })
        .dispatch({ type: 'FETCH_USER', payload: fakePayload })
        .run();
    });

    it('handles errors', () => {
      return expectSaga(fetchUserRequest, authApi)
        .provide({
          call(effect) {
            if (effect.fn === authApi.fetchUser) {
              return fakeError;
            }
          }
        })
        .put({
          type: 'FETCH_USER_FAILED',
          payload: { data: fakeError }
        })
        .dispatch({ type: 'FETCH_USER', payload: fakePayload })
        .run();
    });
  });
});
