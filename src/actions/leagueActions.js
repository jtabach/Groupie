import {
  FETCH_LEAGUE,
  CLEAR_LEAGUE,
  CREATE_LEAGUE,
  JOIN_LEAGUE
} from '../types/leagueTypes';

export const fetchLeague = leagueId => ({
  type: FETCH_LEAGUE,
  payload: leagueId
});

export const clearLeague = () => ({
  type: CLEAR_LEAGUE,
  payload: {}
});

export const createLeague = formData => ({
  type: CREATE_LEAGUE,
  payload: formData
});

export const joinLeague = formData => ({
  type: JOIN_LEAGUE,
  payload: formData
});
