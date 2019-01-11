import * as propTypes           from 'constants/propTypes';
import DatabaseForm             from './DatabaseForm';
import DatabaseList             from './DatabaseList';
import getProps                 from 'containers/getProps';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default getProps('db', 'dbActions')(class DatabasePicker extends PureComponent {
  static propTypes = {
    db        : propTypes.dbState,
    dbActions : propTypes.actions,
  }

  state = {
    isFormOpen : false,
  }

  render() {
    const { db, dbActions } = this.props;

    return (
      <div className={ styles.Root }>
        <DatabaseList dbActions={ dbActions } items={ db.get('items') } />

        <DatabaseForm isVisible={ isFormOpen } />
      </div>
    );
  }
});
