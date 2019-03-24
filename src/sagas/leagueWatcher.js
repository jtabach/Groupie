import { put, takeLatest, call } from 'redux-saga/effects';
import { leagueApi } from './api';
import history from '../history';

import {
  FETCH_LEAGUE,
  FETCH_LEAGUE_COMPLETED,
  CLEAR_LEAGUE,
  CLEAR_LEAGUE_COMPLETED,
  CREATE_LEAGUE,
  CREATE_LEAGUE_COMPLETED,
  CREATE_LEAGUE_FAILED,
  JOIN_LEAGUE,
  JOIN_LEAGUE_COMPLETED,
  JOIN_LEAGUE_FAILED
} from '../types/leagueTypes';

export function* fetchLeagueRequest(action) {
  const leagueId = action.payload;
  try {
    const response = yield call(leagueApi.fetchLeague, action, leagueId);
    yield put({ type: FETCH_LEAGUE_COMPLETED, payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FETCH_LEAGUE_FAILED', error: err });
  }
}

function* clearLeagueRequest(action) {
  yield put({ type: CLEAR_LEAGUE_COMPLETED, payload: { data: {} } });
}

function* createLeagueRequest(action) {
  try {
    const response = yield call(leagueApi.createLeague, action);
    yield put({ type: CREATE_LEAGUE_COMPLETED, payload: { data: response } });
    history.push(`/league/${response.team.league._id}`);
  } catch (err) {
    yield put({ type: CREATE_LEAGUE_FAILED, payload: { data: err } });
  }
}

function* joinLeagueRequest(action) {
  const response = yield call(leagueApi.joinLeague, action);

  if (response.team) {
    yield put({ type: JOIN_LEAGUE_COMPLETED, payload: { data: response } });
    history.push(`/league/${response.team.league._id}`);
  } else {
    yield put({ type: JOIN_LEAGUE_FAILED, payload: { data: response } });
  }
}

export function* leagueWatcher() {
  yield takeLatest(FETCH_LEAGUE, fetchLeagueRequest);
  yield takeLatest(CLEAR_LEAGUE, clearLeagueRequest);
  yield takeLatest(CREATE_LEAGUE, createLeagueRequest);
  yield takeLatest(JOIN_LEAGUE, joinLeagueRequest);
}
