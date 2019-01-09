import { FETCH_TEAM_COMPLETED, CLEAR_TEAM_COMPLETED } from '../types/teamTypes';
import { SET_FANTASY_ESPN_COOKIES_COMPLETED } from '../types/fantasyTypes';

const initialState = {
  _id: null,
  espnCookieString: null,
  user: null,
  league: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_COMPLETED:
      state = action.payload.data.team;
      break;

    case CLEAR_TEAM_COMPLETED:
      state = initialState;
      break;

    case SET_FANTASY_ESPN_COOKIES_COMPLETED:
      state = { ...state, espnCookieString: action.payload.data.espnCookieString }
      break;

    default:
      return state;
  }

  return state;
};
