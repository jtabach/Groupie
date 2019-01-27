import {
  FETCH_FANTASY_STANDINGS,
  FETCH_FANTASY_SCOREBOARD,
  FETCH_FANTASY_ROSTER,
  CLEAR_FANTASY_DATA,
  SET_FANTASY_LEAGUE_ID,
  DELETE_FANTASY_LEAGUE_ID,
  SET_FANTASY_ESPN_COOKIES
} from "../types/fantasyTypes";

export const fetchFantasyStandings = fantasyLeagueId => ({
  type: FETCH_FANTASY_STANDINGS,
  payload: fantasyLeagueId
});

export const fetchFantasyScoreboard = (fantasyLeagueId, matchupPeriodId) => ({
  type: FETCH_FANTASY_SCOREBOARD,
  payload: { fantasyLeagueId, matchupPeriodId }
});

export const fetchFantasyRoster = (fantasyLeagueId, teamId) => ({
  type: FETCH_FANTASY_ROSTER,
  payload: { fantasyLeagueId, teamId }
});

export const clearFantasyData = () => ({
  type: CLEAR_FANTASY_DATA,
  payload: {}
});

export const setFantasyLeagueId = (fantasyLeagueId, leagueId) => ({
  type: SET_FANTASY_LEAGUE_ID,
  payload: { fantasyLeagueId, leagueId }
});

export const deleteFantasyLeagueId = leagueId => ({
  type: DELETE_FANTASY_LEAGUE_ID,
  payload: { leagueId }
});

export const setFantasyEspnCookies = (
  fantasyEspnCookies,
  teamId,
  fantasyLeagueId
) => ({
  type: SET_FANTASY_ESPN_COOKIES,
  payload: { fantasyEspnCookies, teamId, fantasyLeagueId }
});
