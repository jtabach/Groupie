import { postRequest } from '../helpers/request';
import CONFIG from '../../config';

export default {
  createComment(action) {
    return postRequest(`${CONFIG.serverUrl}/comment`, action.payload);
  }
};
