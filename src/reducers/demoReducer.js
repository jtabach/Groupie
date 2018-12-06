import { FETCH_WORKER_DEMO_COMPLETED } from '../types/demoTypes';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_WORKER_DEMO_COMPLETED:
      return action.payload.data;
    default:
      return state;
  }
};
