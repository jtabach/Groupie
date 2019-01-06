import {
  FETCH_FANTASY_STANDINGS,
  FETCH_FANTASY_SCOREBOARD,
  CLEAR_FANTASY_DATA,
  SET_FANTASY_LEAGUE_ID,
  SET_FANTASY_TEAM_ID
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

export const setFantasyLeagueId = (fantasyLeagueId, leagueId) => ({
  type: SET_FANTASY_LEAGUE_ID,
  payload: { fantasyLeagueId, leagueId }
});

export const setFantasyTeamId = (fantasyTeamId, teamId) => ({
  type: SET_FANTASY_TEAM_ID,
  payload: { fantasyTeamId, teamId }
});