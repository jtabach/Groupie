import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import {
  FETCH_LEAGUE,
  FETCH_LEAGUE_COMPLETED,
  CLEAR_LEAGUE,
  CLEAR_LEAGUE_COMPLETED,
  CREATE_LEAGUE,
  CREATE_LEAGUE_COMPLETED,
  JOIN_LEAGUE,
  JOIN_LEAGUE_COMPLETED
} from '../types/leagueTypes';

function* fetchLeagueRequest(action) {
  const leagueId = action.payload;
  const response = yield call(
    getRequest,
    `http://localhost:5000/api/league/${leagueId}`
  );
  if (response.league) {
    yield put({ type: FETCH_LEAGUE_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to fetch league');
  }
}

function* clearLeagueRequest(action) {
  yield put({ type: CLEAR_LEAGUE_COMPLETED, payload: { data: {} } });
}

function* createLeagueRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/league',
    action.payload
  );
  // TODO: some conditional to show league created successfully
  if (response.team) {
    yield put({ type: CREATE_LEAGUE_COMPLETED, payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed league creation');
  }
}

function* joinLeagueRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/team',
    action.payload
  );
  // TODO: some conditional to show league was joined successfully
  if (response.team) {
    yield put({ type: JOIN_LEAGUE_COMPLETED, payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed join league');
  }
}

export function* leagueWatcher() {
  yield takeLatest(FETCH_LEAGUE, fetchLeagueRequest);
  yield takeLatest(CLEAR_LEAGUE, clearLeagueRequest);
  yield takeLatest(CREATE_LEAGUE, createLeagueRequest);
  yield takeLatest(JOIN_LEAGUE, joinLeagueRequest);
}
