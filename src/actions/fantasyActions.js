import {
  FETCH_FANTASY_STANDINGS,
  FETCH_FANTASY_SCOREBOARD,
  CLEAR_FANTASY_DATA,
} from '../types/fantasyTypes';

import {
  SET_FANTASY_LEAGUE_ID
} from '../types/leagueTypes';

export const fetchFantasyStandings = fantasyLeagueId => ({
  type: FETCH_FANTASY_STANDINGS,
  payload: fantasyLeagueId
});

export const fetchFantasyScoreboard = (fantasyLeagueId, matchupPeriodId) => ({
  type: FETCH_FANTASY_SCOREBOARD,
  payload: { fantasyLeagueId, matchupPeriodId }
});

export const clearFantasyData = () => ({
  type: CLEAR_FANTASY_DATA,
  payload: {}
});

export const setFantasyLeagueId = (fantasyLeagueId, leagueId) => ({
  type: SET_FANTASY_LEAGUE_ID,
  payload: { fantasyLeagueId, leagueId }
});