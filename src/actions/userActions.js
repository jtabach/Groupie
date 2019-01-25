import axios from 'axios';
import _ from 'lodash';

axios.defaults.withCredentials = true;

import { createAction, createAsyncAction } from '../helpers/async';

import {
  FETCH_USERS_TEAMS,
  FETCH_USERS_TEAMS_COMPLETED
} from '../types/userTypes';

export const getLeagues = () => {
  return createAsyncAction(FETCH_USERS_TEAMS, FETCH_USERS_TEAMS_COMPLETED, () =>
    axios.get('http://localhost:5000/api/user/teams')
  );
};
