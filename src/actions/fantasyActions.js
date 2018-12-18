import { FETCH_FANTASY_STANDINGS } from '../types/fantasyTypes';

export const fetchFantasyStandings = fantasyLeagueId => ({
  type: FETCH_FANTASY_STANDINGS,
  payload: fantasyLeagueId
});
