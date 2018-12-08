import { put, takeLatest, call } from 'redux-saga/effects';
import { getRequest } from './helpers/request';

import {
  FETCH_PLAYER_NEWS,
  FETCH_PLAYER_NEWS_COMPLETED,
} from '../types/newsTypes';

function* fetchPlayerNewsRequest(action) {
  const response = yield call(
    getRequest,
    "http://localhost:5000/api/news/players"
  );
  if (response.team) {
    yield put({ type: FETCH_PLAYER_NEWS_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to fetch player news');
  }
}

export function* newsWatcher() {
  yield takeLatest(FETCH_PLAYER_NEWS, fetchPlayerNewsRequest);
}
