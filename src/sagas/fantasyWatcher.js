import { put, takeLatest, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import CONFIG from '../config';

import {
  FETCH_FANTASY_STANDINGS,
  FETCH_FANTASY_STANDINGS_COMPLETE,
  FETCH_FANTASY_SCOREBOARD,
  FETCH_FANTASY_SCOREBOARD_COMPLETE,
  CLEAR_FANTASY_DATA,
  CLEAR_FANTASY_DATA_COMPLETE,
  SET_FANTASY_LEAGUE_ID,
  SET_FANTASY_LEAGUE_ID_COMPLETED,
  SET_FANTASY_TEAM_ID,
  SET_FANTASY_TEAM_ID_COMPLETED
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

function* setFantasyLeagueIdRequest(action) {
  const { fantasyLeagueId, leagueId } = action.payload;
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/league/setFantasyLeagueId/${leagueId}`,
    fantasyLeagueId
  );

  if (response.fantasyLeagueId) {
    yield put({ type: SET_FANTASY_LEAGUE_ID_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to set fantasy league id');
  }
}

function* setFantasyTeamIdRequest(action) {
  const { fantasyTeamId, teamId } = action.payload;
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/team/setFantasyTeamId/${teamId}`,
    fantasyTeamId
  );

  if (response.fantasyTeamId) {
    console.log(response.fantasyTeamId);
    yield put({ type: SET_FANTASY_TEAM_ID_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to set fantasy team id');
  }
}

function* clearFantasyDataRequest(action) {
  yield put({ type: CLEAR_FANTASY_DATA_COMPLETE, payload: { data: {} } });
}

export function* fantasyWatcher() {
  yield takeLatest(FETCH_FANTASY_STANDINGS, fetchFantasyStandingsRequest);
  yield takeLatest(FETCH_FANTASY_SCOREBOARD, fetchFantasyScoresRequest);
  yield takeLatest(CLEAR_FANTASY_DATA, clearFantasyDataRequest);
  yield takeLatest(SET_FANTASY_LEAGUE_ID, setFantasyLeagueIdRequest);
  yield takeLatest(SET_FANTASY_TEAM_ID, setFantasyTeamIdRequest);
}
