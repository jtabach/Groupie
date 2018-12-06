import {
  REGISTER_USER_COMPLETED,
  REGISTER_USER_FAILED,
  LOGIN_USER_COMPLETED,
  LOGOUT_USER_COMPLETED,
  FETCH_USER_COMPLETED,
  FETCH_USER_FAILED
} from '../types/authTypes';

import {
  CREATE_LEAGUE_COMPLETED,
  JOIN_LEAGUE_COMPLETED
} from '../types/leagueTypes';

import {
  FETCH_NOTIFICATIONS_COMPLETED,
  VIEW_NOTIFICATION_COMPLETED,
  VIEW_ALL_NOTIFICATIONS_COMPLETED,
  DISMISS_NOTIFICATIONS_COMPLETED
} from '../types/notificationTypes';

const initialState = {
  _id: null,
  email: null,
  password: null,
  teams: [],
  notifications: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_COMPLETED:
      state = action.payload.data.user;
      break;

    case REGISTER_USER_FAILED:
      state = {
        ...initialState,
        _id: false
      };
      break;

    case LOGIN_USER_COMPLETED:
      state = action.payload.data.user;
      break;

    case FETCH_USER_COMPLETED:
      state = action.payload.data.user;
      break;

    case FETCH_USER_FAILED:
      state = { ...initialState, _id: false };
      break;

    case CREATE_LEAGUE_COMPLETED:
      // Consider a helper function for reusability
      state = {
        ...state,
        teams: state.teams.concat([action.payload.data.team])
      };
      break;

    case JOIN_LEAGUE_COMPLETED:
      state = {
        ...state,
        teams: state.teams.concat([action.payload.data.team])
      };
      break;

    case FETCH_NOTIFICATIONS_COMPLETED:
      state = {
        ...state,
        notifications: action.payload.data.notifications
      };
      break;

    case VIEW_NOTIFICATION_COMPLETED:
      state = {
        ...state,
        notifications: state.notifications.map(notification => {
          if (notification._id === action.payload.data.notification._id) {
            notification.hasViewed = true;
          }
          return notification;
        })
      };
      break;

    // TODO: leverage action.payload for setting hasDismissed property
    case VIEW_ALL_NOTIFICATIONS_COMPLETED:
      state = {
        ...state,
        notifications: state.notifications.map(notification => {
          notification.hasViewed = true;
          return notification;
        })
      };
      break;

    // TODO: leverage action.payload for setting hasDismissed property
    case DISMISS_NOTIFICATIONS_COMPLETED:
      state = {
        ...state,
        notifications: state.notifications.map(notification => {
          notification.hasDismissed = true;
          return notification;
        })
      };
      break;

    case LOGOUT_USER_COMPLETED:
      state = {
        ...state,
        _id: false
      };
      break;
    default:
      return state;
  }
  return state;
};
