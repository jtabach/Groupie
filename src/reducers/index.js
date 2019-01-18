import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import demoReducer from './demoReducer';
import userReducer from './userReducer';
import leagueReducer from './leagueReducer';
import teamReducer from './teamReducer';
import newsReducer from './newsReducer';
import fantasyReducer from './fantasyReducer';
import formLoadingReducer from './formLoadingReducer';

export default combineReducers({
  demo: demoReducer,
  form: formReducer,
  user: userReducer,
  league: leagueReducer,
  team: teamReducer,
  news: newsReducer,
  fantasy: fantasyReducer,
  formLoading: formLoadingReducer
});
