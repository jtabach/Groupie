
import {
  CREATE_LEAGUE,
  CREATE_LEAGUE_COMPLETED,
  CREATE_LEAGUE_FAILED,
  JOIN_LEAGUE,
  JOIN_LEAGUE_COMPLETED,
  JOIN_LEAGUE_FAILED
} from '../types/leagueTypes';

const initialState = {
  joinLeague: {
    loading: false,
    errorMessage: ''
  },
  createLeague: {
    loading: false,
    errorMessage: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JOIN_LEAGUE:
      state = {
        ...initialState,
        joinLeague: {
          errorMessage: '',
          loading: true
        }
      };
      break;
    case JOIN_LEAGUE_COMPLETED:
      state = {
        ...initialState,
        joinLeague: {
          errorMessage: '',
          loading: false
        }
      };
      break;
    case JOIN_LEAGUE_FAILED:
      state = {
        ...initialState,
        joinLeague: {
          errorMessage: action.payload.data.message,
          loading: false
        }
      };
      break;
    default:
      return state;
  }
  return state;
};
