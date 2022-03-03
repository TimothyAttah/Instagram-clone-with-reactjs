import { combineReducers } from 'redux';
import { theme } from './themeReducer';
import { posts } from './postReducer';

const reducers = combineReducers({
  theme,
  posts,
});

export default reducers;
