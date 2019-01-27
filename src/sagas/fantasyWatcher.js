import { put, takeLatest, call } from "redux-saga/effects";
import { getRequest, postRequest, deleteRequest } from "./helpers/request";

import CONFIG from "../config";

import {
  FETCH_FANTASY_STANDINGS,
  FETCH_FANTASY_STANDINGS_COMPLETE,
  FETCH_FANTASY_SCOREBOARD,
  FETCH_FANTASY_SCOREBOARD_COMPLETE,
  FETCH_FANTASY_ROSTER,
  FETCH_FANTASY_ROSTER_COMPLETE,
  CLEAR_FANTASY_DATA,
  CLEAR_FANTASY_DATA_COMPLETE,
  SET_FANTASY_LEAGUE_ID,
  SET_FANTASY_LEAGUE_ID_COMPLETED,
  SET_FANTASY_LEAGUE_ID_FAILED,
  DELETE_FANTASY_LEAGUE_ID,
  DELETE_FANTASY_LEAGUE_ID_COMPLETED,
  SET_FANTASY_ESPN_COOKIES,
  SET_FANTASY_ESPN_COOKIES_COMPLETED,
  SET_FANTASY_ESPN_COOKIES_FAILED,
  DELETE_FANTASY_ESPN_COOKIES,
  DELETE_FANTASY_ESPN_COOKIES_COMPLETED
} from "../types/fantasyTypes";

function* fetchFantasyStandingsRequest(action) {
  const fantasyLeagueId = action.payload;

  const response = yield call(
    getRequest,
    `${CONFIG.serverUrl}/fantasy/standings/${fantasyLeagueId}`
  );
  if (response.standings) {
    yield put({
      type: FETCH_FANTASY_STANDINGS_COMPLETE,
      payload: { data: response }
    });
  } else {
    console.log("handle failed to fetch fantasy standings");
  }
}

function* fetchFantasyScoresRequest(action) {
  const { fantasyLeagueId, matchupPeriodId } = action.payload;

  const response = yield call(
    getRequest,
    `${
      CONFIG.serverUrl
    }/fantasy/scoreboard/${fantasyLeagueId}/${matchupPeriodId}`
  );

  if (response.scores) {
    yield put({
      type: FETCH_FANTASY_SCOREBOARD_COMPLETE,
      payload: { data: response }
    });
  } else {
    console.log("handle failed to fetch fantasy scores");
  }
}

function* fetchFantasyRosterRequest(action) {
  const { fantasyLeagueId, teamId } = action.payload;

  const response = yield call(
    getRequest,
    `${CONFIG.serverUrl}/fantasy/roster/${fantasyLeagueId}/${teamId}`
  );

  if (response.roster) {
    yield put({
      type: FETCH_FANTASY_ROSTER_COMPLETE,
      payload: { data: response }
    });
  } else {
    console.log("handle failed to fetch fantasy roster");
  }
}

function* setFantasyLeagueIdRequest(action) {
  const { fantasyLeagueId, leagueId } = action.payload;
  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/league/fantasyLeagueId/${leagueId}`,
    fantasyLeagueId
  );

  if (response.fantasyLeagueId) {
    yield put({
      type: SET_FANTASY_LEAGUE_ID_COMPLETED,
      payload: { data: response }
    });
  } else {
    yield put({
      type: SET_FANTASY_LEAGUE_ID_FAILED,
      payload: { data: response }
    });
  }
}

function* deleteFantasyLeagueIdRequest(action) {
  const { leagueId } = action.payload;
  const response = yield call(
    deleteRequest,
    `${CONFIG.serverUrl}/league/fantasyLeagueId/${leagueId}`
  );

  if (response.verify) {
    yield put({
      type: DELETE_FANTASY_LEAGUE_ID_COMPLETED,
      payload: { data: response }
    });
    yield put({ type: CLEAR_FANTASY_DATA });
  } else {
    console.log("handle failed to delete fantasy league id");
  }
}

function* setFantasyEspnCookiesRequest(action) {
  const { fantasyEspnCookies, teamId, fantasyLeagueId } = action.payload;

  const response = yield call(
    postRequest,
    `${CONFIG.serverUrl}/team/fantasyEspnCookies/${teamId}/${fantasyLeagueId}`,
    fantasyEspnCookies
  );

  if (response.espnCookieString) {
    yield put({
      type: SET_FANTASY_ESPN_COOKIES_COMPLETED,
      payload: { data: response }
    });
  } else {
    yield put({
      type: SET_FANTASY_ESPN_COOKIES_FAILED,
      payload: { data: response }
    });
  }
}

function* deleteFantasyEspnCookiesRequest(action) {
  const { teamId } = action.payload;
  const response = yield call(
    deleteRequest,
    `${CONFIG.serverUrl}/team/fantasyEspnCookies/${teamId}`
  );

  if (response.verify) {
    yield put({
      type: DELETE_FANTASY_ESPN_COOKIES_COMPLETED,
      payload: { data: response }
    });
    yield put({ type: CLEAR_FANTASY_DATA });
  } else {
    console.log("handle failed to delete fantasy espn cookies");
  }
}

function* clearFantasyDataRequest(action) {
  yield put({ type: CLEAR_FANTASY_DATA_COMPLETE, payload: { data: {} } });
}

export function* fantasyWatcher() {
  yield takeLatest(FETCH_FANTASY_STANDINGS, fetchFantasyStandingsRequest);
  yield takeLatest(FETCH_FANTASY_SCOREBOARD, fetchFantasyScoresRequest);
  yield takeLatest(FETCH_FANTASY_ROSTER, fetchFantasyRosterRequest);
  yield takeLatest(CLEAR_FANTASY_DATA, clearFantasyDataRequest);
  yield takeLatest(SET_FANTASY_LEAGUE_ID, setFantasyLeagueIdRequest);
  yield takeLatest(DELETE_FANTASY_LEAGUE_ID, deleteFantasyLeagueIdRequest);
  yield takeLatest(SET_FANTASY_ESPN_COOKIES, setFantasyEspnCookiesRequest);
  yield takeLatest(
    DELETE_FANTASY_ESPN_COOKIES,
    deleteFantasyEspnCookiesRequest
  );
}
