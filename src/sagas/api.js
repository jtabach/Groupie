import { getRequest, postRequest } from './helpers/request';
import CONFIG from '../config';

export default {
  loginUser(action) {
    return postRequest(`${CONFIG.serverUrl}/auth/login`, action.payload);
  }
};
