import { combineReducers } from 'redux';
import movieReducer from './movie';

const generalReducer = combineReducers({
  movie: movieReducer,
});

export default generalReducer;
