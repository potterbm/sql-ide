import * as actionTypes from 'constants/actionTypes';
import uuid             from 'uuid/v4';

export default {
  select: (databaseId) => ({
    type    : actionTypes.SELECT_DATABASE,
    payload : databaseId,
  }),

  save: (database) => {
    if (!database.id) database.id = uuid();

    return {
      type    : actionTypes.SAVE_DATABASE,
      payload : database,
    };
  }
};
