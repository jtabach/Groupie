import { FETCH_FANTASY_STANDINGS_COMPLETE } from '../types/fantasyTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FANTASY_STANDINGS_COMPLETE:
    console.log(action.payload);
      state = { ...state, standings: action.payload.data.standings };
      break;

    default:
      return state;
  }

  return state;
};
