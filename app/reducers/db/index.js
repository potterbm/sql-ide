import { DATABASES }    from 'constants/localStorageKeys';
import * as actionTypes from 'constants/actionTypes';
import createReducer    from '../createReducer';
import initialState     from './initialState';

export default createReducer(initialState, {
  [actionTypes.START_APP]: (state) => {
    const storedDBs = window.localStorage.getItem(DATABASES);

    if (storedDBs === null) return state;
    return state.set('items', JSON.parse(storedDBs));
  },

  [actionTypes.SELECT_DATABASE]: (state, { payload: id }) => state.set('current', id),

  [actionTypes.SAVE_DATABASE]: (state, { payload: { database } }) => {
    const existingDBIndex = state.get('items').findIndex((db) => db.get('id') === database.id);

    if (existingDBIndex !== undefined) {
      return state.setIn(['items', existingDBIndex], Immutable.fromJS(database));
    }

    return state.updateIn(
      'items',
      (list) => list.push(Immutable.fromJS(database)),
    );
  }
});
