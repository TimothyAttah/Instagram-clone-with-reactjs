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
