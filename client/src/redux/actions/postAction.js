import { POST_TYPES } from '../types';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_TYPES.GET_POSTS,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (post) => async (dispatch) => {
  try {
    dispatch({
      type: POST_TYPES.DELETE_POST,
      payload: post,
    });
  } catch (err) {
    console.log(err);
  }
};
