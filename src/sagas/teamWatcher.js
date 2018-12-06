import { put, takeLatest, call } from 'redux-saga/effects';
import { getRequest } from './helpers/request';

import {
  FETCH_TEAM,
  FETCH_TEAM_COMPLETED,
  CLEAR_TEAM,
  CLEAR_TEAM_COMPLETED
} from '../types/teamTypes';

function* fetchTeamRequest(action) {
  const leagueId = action.payload;
  const response = yield call(
    getRequest,
    `http://localhost:5000/api/team/${leagueId}`
  );
  if (response.team) {
    yield put({ type: FETCH_TEAM_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to fetch team');
  }
}

function* clearTeamRequest(action) {
  yield put({ type: CLEAR_TEAM_COMPLETED, payload: { data: null } });
}

export function* teamWatcher() {
  yield takeLatest(FETCH_TEAM, fetchTeamRequest);
  yield takeLatest(CLEAR_TEAM, clearTeamRequest);
}
