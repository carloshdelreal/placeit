import { combineReducers } from 'redux';
import teamsReducer from './teams';

const generalReducer = combineReducers({
  teamsList: teamsReducer,
});

export default generalReducer;
