import { FETCH_TEAM_COMPLETED, CLEAR_TEAM_COMPLETED } from '../types/teamTypes';

const initialState = {
  _id: null,
  name: null,
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
    default:
      return state;
  }

  return state;
};
