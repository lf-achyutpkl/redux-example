import * as actionTypes  from './actionTypes';

export const savePost = posts => ({
  type: actionTypes.SAVE_POST,
  payload: {
    posts
  }
});
