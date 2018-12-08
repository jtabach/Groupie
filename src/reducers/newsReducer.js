import { FETCH_PLAYER_NEWS_COMPLETED } from '../types/newsTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYER_NEWS_COMPLETED:
      state = action.payload.data.news;
      break;

    default:
      return state;
  }

  return state;
};
