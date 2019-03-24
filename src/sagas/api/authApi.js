import { getRequest, postRequest } from '../helpers/request';
import CONFIG from '../../config';

export default {
  loginUser(action) {
    return postRequest(`${CONFIG.serverUrl}/auth/login`, action.payload);
  },
  registerUser(action) {
    return postRequest(`${CONFIG.serverUrl}/auth/register`, action.payload);
  },
  logoutUser(action) {
    return postRequest(`${CONFIG.serverUrl}/auth/logout`, action.payload);
  },
  fetchUser() {
    return getRequest(`${CONFIG.serverUrl}/user`);
  }
};
