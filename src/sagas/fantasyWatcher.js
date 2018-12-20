import { put, takeLatest, call } from 'redux-saga/effects';
import { getRequest } from './helpers/request';

import CONFIG from '../config';

import {
  FETCH_FANTASY_STANDINGS,
  FETCH_FANTASY_STANDINGS_COMPLETE,
  FETCH_FANTASY_SCOREBOARD,
  FETCH_FANTASY_SCOREBOARD_COMPLETE
} from '../types/fantasyTypes';

function* fetchFantasyStandingsRequest(action) {
  const fantasyLeagueId = action.payload;

  const response = yield call(
    getRequest,
    `${CONFIG.serverUrl}/fantasy/standings/${fantasyLeagueId}`
  );
  if (response.standings) {
    yield put({ type: FETCH_FANTASY_STANDINGS_COMPLETE, payload: { data: response } });
  } else {
    console.log('handle failed to fetch fantasy standings');
  }
}

function* fetchFantasyScoresRequest(action) {
  const { fantasyLeagueId, matchupPeriodId } = action.payload;

  const response = yield call(
    getRequest,
    `${CONFIG.serverUrl}/fantasy/scoreboard/${fantasyLeagueId}/${matchupPeriodId}`
  );

  if (response.scores) {
    yield put({ type: FETCH_FANTASY_SCOREBOARD_COMPLETE, payload: { data: response } });
  } else {
    console.log('handle failed to fetch fantasy scores');
  }
}

export function* fantasyWatcher() {
  yield takeLatest(FETCH_FANTASY_STANDINGS, fetchFantasyStandingsRequest);
  yield takeLatest(FETCH_FANTASY_SCOREBOARD, fetchFantasyScoresRequest);
}
