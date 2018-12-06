import { LIKE_POST, DELETE_LIKE_POST } from '../types/likeTypes';

export const likePost = likeData => ({
  type: LIKE_POST,
  payload: likeData
});

export const deleteLikePost = likeData => ({
  type: DELETE_LIKE_POST,
  payload: likeData
});
