import { FETCH_TEAM_COMPLETED, CLEAR_TEAM_COMPLETED } from '../types/teamTypes';
import { SET_FANTASY_TEAM_ID_COMPLETED } from '../types/fantasyTypes';

const initialState = {
  _id: null,
  fantasyTeamId: null,
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

    case SET_FANTASY_TEAM_ID_COMPLETED:
      state = { ...state, fantasyTeamId: action.payload.data.fantasyTeamId }
      break;

    default:
      return state;
  }

  return state;
};
