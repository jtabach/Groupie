import {
  FETCH_FANTASY_STANDINGS_COMPLETE,
  FETCH_FANTASY_SCOREBOARD_COMPLETE
} from '../types/fantasyTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FANTASY_STANDINGS_COMPLETE:
      state = { ...state, standings: action.payload.data.standings };
      break;

    case FETCH_FANTASY_SCOREBOARD_COMPLETE:
      state = { ...state, scoreboard: action.payload.data.scores };
      break;

    default:
      return state;
  }

  return state;
};
