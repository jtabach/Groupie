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

function* fetchLeagueRequest(action) {
  const leagueId = action.payload;
  const response = yield call(leagueApi.fetchLeague, action, leagueId);
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
  const response = yield call(leagueApi.createLeague, action);
  console.log(response);

  if (response.team) {
    yield put({ type: CREATE_LEAGUE_COMPLETED, payload: { data: response } });
    history.push(`/league/${response.team.league._id}`);
  } else {
    yield put({ type: CREATE_LEAGUE_FAILED, payload: { data: response } });
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
