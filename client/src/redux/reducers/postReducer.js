import { POST_TYPES } from '../types';

const initialState = {
  loading: false,
  posts: [],
  result: 0,
  page: 2,
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case POST_TYPES.LOADING_POST:
      return {
        ...state,
        loading: action.payload,
      };

    case POST_TYPES.GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        result: action.payload.result,
        page: action.payload.page,
      };

    default:
      return state;
  }
};
