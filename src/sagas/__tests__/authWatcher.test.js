import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { loginUserRequest } from '../authWatcher';
import { authApi } from '../api/index'; // code editor bug, must add index path :/

describe('LoginUser', () => {
  let fakeUser;
  let fakePayload;
  let fakeError;

  beforeEach(() => {
    fakeUser = {
      user: { email: 'a@a.com', firstName: 'John', lastName: 'Doe' }
    };
    fakePayload = { email: 'a@a.com', password: 'asdfasdf' };
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
