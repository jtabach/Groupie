import {
  FETCH_FANTASY_STANDINGS_COMPLETE,
  FETCH_FANTASY_SCOREBOARD_COMPLETE,
  CLEAR_FANTASY_DATA_COMPLETE
} from '../types/fantasyTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FANTASY_STANDINGS_COMPLETE:
      state = { ...state, standings: action.payload.data.standings };
      break;

    case FETCH_FANTASY_SCOREBOARD_COMPLETE:
      state = { ...state, scores: action.payload.data.scores };
      break;

    case CLEAR_FANTASY_DATA_COMPLETE:
      state = initialState;
      break;

    default:
      return state;
  }

  return state;
};
