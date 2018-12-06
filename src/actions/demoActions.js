import axios from 'axios';

import { createAsyncAction } from '../helpers/async';
import {
  FETCH_WORKER_DEMO,
  FETCH_WORKER_DEMO_COMPLETED,
  AUTH_DEMO,
  AUTH_DEMO_COMPLETED
} from '../types/demoTypes';

axios.defaults.withCredentials = true;

export const fetchWorkerDemo = () => {
  return createAsyncAction(FETCH_WORKER_DEMO, FETCH_WORKER_DEMO_COMPLETED, () =>
    axios.get('http://localhost:5000')
  );
};

export const fetchAuthDemo = () => {
  return createAsyncAction(AUTH_DEMO, AUTH_DEMO_COMPLETED, () =>
    axios.get('http://localhost:5000/api/auth/google')
  );
};
