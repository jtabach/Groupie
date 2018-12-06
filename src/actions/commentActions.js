import { CREATE_COMMENT } from '../types/commentTypes';

export const createComment = commentData => ({
  type: CREATE_COMMENT,
  payload: commentData
});
