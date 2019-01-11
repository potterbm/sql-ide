import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes          from 'prop-types';

export const actions = PropTypes.objectOf(PropTypes.func).isRequired;

const baseDB = {
  id    : PropTypes.string,
  title : PropTypes.string,
  type  : PropTypes.string,
};

export const sqliteDB = ImmutablePropTypes.contains({
  ...baseDB,
  filename : PropTypes.string,
});

export const db = PropTypes.oneOfType([
  sqliteDB,
]);

export const dbs = PropTypes.listOf(db);

export const dbState = ImmutablePropTypes.contains({
  current   : db,
  isLoading : PropTypes.bool.isRequired,
  isSaving  : PropTypes.bool.isRequired,
  items     : dbs,
});
