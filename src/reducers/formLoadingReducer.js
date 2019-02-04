import {
  CREATE_LEAGUE,
  CREATE_LEAGUE_COMPLETED,
  CREATE_LEAGUE_FAILED,
  JOIN_LEAGUE,
  JOIN_LEAGUE_COMPLETED,
  JOIN_LEAGUE_FAILED
} from '../types/leagueTypes';

import {
  SET_FANTASY_LEAGUE_ID,
  SET_FANTASY_LEAGUE_ID_COMPLETED,
  SET_FANTASY_LEAGUE_ID_FAILED,
  SET_FANTASY_ESPN_COOKIES,
  SET_FANTASY_ESPN_COOKIES_COMPLETED,
  SET_FANTASY_ESPN_COOKIES_FAILED
} from '../types/fantasyTypes';

import {
  CHANGE_NOTIFICATION_SETTINGS,
  CHANGE_NOTIFICATION_SETTINGS_COMPLETED,
  CHANGE_NOTIFICATION_SETTINGS_FAILED
} from '../types/notificationTypes';

import { CLEAR_FORM_MESSAGES } from '../types/formTypes';

const initialState = {
  joinLeague: {
    loading: false,
    errorMessage: ''
  },
  createLeague: {
    loading: false,
    errorMessage: ''
  },
  fantasyLeagueId: {
    loading: false,
    errorMessage: '',
    successMessage: ''
  },
  fantasyEspnCookie: {
    loading: false,
    errorMessage: '',
    successMessage: ''
  },
  notificationSettings: {
    loading: false,
    errorMessage: '',
    successMessage: ''
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
    case CREATE_LEAGUE:
      state = {
        ...initialState,
        createLeague: {
          errorMessage: '',
          loading: true
        }
      };
      break;
    case CREATE_LEAGUE_COMPLETED:
      state = {
        ...initialState,
        createLeague: {
          errorMessage: '',
          loading: false
        }
      };
      break;
    case CREATE_LEAGUE_FAILED:
      state = {
        ...initialState,
        createLeague: {
          errorMessage: action.payload.data.message,
          loading: false
        }
      };
      break;

    case SET_FANTASY_LEAGUE_ID:
      state = {
        ...initialState,
        fantasyLeagueId: {
          errorMessage: '',
          successMessage: '',
          loading: true
        }
      };
      break;

    case SET_FANTASY_LEAGUE_ID_COMPLETED:
      state = {
        ...initialState,
        fantasyLeagueId: {
          errorMessage: '',
          successMessage: action.payload.data.message,
          loading: false
        }
      };
      break;

    case SET_FANTASY_LEAGUE_ID_FAILED:
      state = {
        ...initialState,
        fantasyLeagueId: {
          errorMessage: action.payload.data.message,
          successMessage: '',
          loading: false
        }
      };
      break;

    case SET_FANTASY_ESPN_COOKIES:
      state = {
        ...initialState,
        fantasyEspnCookie: {
          errorMessage: '',
          successMessage: '',
          loading: true
        }
      };
      break;

    case SET_FANTASY_ESPN_COOKIES_COMPLETED:
      state = {
        ...initialState,
        fantasyEspnCookie: {
          errorMessage: '',
          successMessage: action.payload.data.message,
          loading: false
        }
      };
      break;

    case SET_FANTASY_ESPN_COOKIES_FAILED:
      state = {
        ...initialState,
        fantasyEspnCookie: {
          errorMessage: action.payload.data.message,
          successMessage: '',
          loading: false
        }
      };
      break;

    case CHANGE_NOTIFICATION_SETTINGS:
      state = {
        ...initialState,
        notificationSettings: {
          errorMessage: '',
          successMessage: '',
          loading: true
        }
      };
      break;

    case CHANGE_NOTIFICATION_SETTINGS_COMPLETED:
      state = {
        ...initialState,
        notificationSettings: {
          errorMessage: '',
          successMessage: action.payload.data.message,
          loading: false
        }
      };
      break;

    case CHANGE_NOTIFICATION_SETTINGS_FAILED:
      state = {
        ...initialState,
        notificationSettings: {
          errorMessage: action.payload.data.message,
          successMessage: '',
          loading: false
        }
      };
      break;

    case CLEAR_FORM_MESSAGES:
      state = initialState;
      break;

    default:
      return state;
  }
  return state;
};
