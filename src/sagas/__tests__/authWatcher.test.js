import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { loginUserRequest } from '../authWatcher';
import { authApi } from '../api';

it('logs in the user', () => {
  const fakeUser = {
    user: { email: 'a@a.com', firstName: 'John', lastName: 'Doe' }
  };
  const fakePayload = { email: 'a@a.com', password: 'asdfasdf' };

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
