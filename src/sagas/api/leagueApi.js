import { getRequest, postRequest } from '../helpers/request';
import CONFIG from '../../config';

export default {
  fetchLeague(action, leagueId) {
    return getRequest(`${CONFIG.serverUrl}/league/${leagueId}`);
  },
  createLeague(action) {
    return postRequest(`${CONFIG.serverUrl}/league`, action.payload);
  },
  joinLeague(action) {
    return postRequest(`${CONFIG.serverUrl}/team`, action.payload);
  }
};
