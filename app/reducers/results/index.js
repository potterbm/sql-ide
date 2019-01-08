import * as actionTypes from 'constants/actionTypes';
import createReducer    from '../createReducer';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.GET_RESULTS_PENDING]: (state) => state.set('items', []),
});
