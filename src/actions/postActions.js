import { CREATE_POST, DELETE_POST, EDIT_POST } from '../types/postTypes';

export const createPost = postData => ({
  type: CREATE_POST,
  payload: postData
});

export const deletePost = postData => ({
  type: DELETE_POST,
  payload: postData
});

export const editPost = postData => ({
  type: EDIT_POST,
  payload: postData
});
