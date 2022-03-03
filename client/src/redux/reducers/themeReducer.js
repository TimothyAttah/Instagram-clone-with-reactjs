import { GLOBAL_TYPES } from '../types';

const initialState = false;

export const theme = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_TYPES.THEME:
      return action.payload;

    default:
      return state;
  }
};
