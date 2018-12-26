import {
  FETCH_FANTASY_STANDINGS,
  FETCH_FANTASY_SCOREBOARD,
  CLEAR_FANTASY_DATA
} from '../types/fantasyTypes';

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