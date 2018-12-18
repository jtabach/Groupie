import { put, takeLatest, call } from 'redux-saga/effects';
import { getRequest } from './helpers/request';

import CONFIG from '../config';

import { FETCH_FANTASY_STANDINGS, FETCH_FANTASY_STANDINGS_COMPLETE } from '../types/fantasyTypes';

function* fetchFantasyStandingsRequest(action) {
  const fantasyLeagueId = action.payload;
  console.log(fantasyLeagueId);

  const response = yield call(
    getRequest,
    `${CONFIG}/standings?leagueId=${fantasyLeagueId}&seasonId=2018`
  );
  if (response.comment) {
    yield put({ type: FETCH_FANTASY_STANDINGS_COMPLETE, payload: { data: response } });
  } else {
    console.log('handle failed to fetch fantasy standings');
  }
}

export function* fantasyWatcher() {
  yield takeLatest(FETCH_FANTASY_STANDINGS, fetchFantasyStandingsRequest);
}
