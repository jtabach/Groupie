import { createAction, createAsyncAction } from '../helpers/async';

import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER
} from '../types/authTypes';

export const registerUser = userData => ({
  type: REGISTER_USER,
  payload: userData
});

export const loginUser = userData => ({
  type: LOGIN_USER,
  payload: userData
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {}
});

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: {}
});
