import { combineReducers } from 'redux-immutable';
import db                  from './db';
import results             from './results';

export default combineReducers({
  db,
  results,
});
