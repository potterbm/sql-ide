import * as propTypes           from 'constants/propTypes';
import getProps                 from 'containers/getProps';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class DatabaseList extends PureComponent {
  static propTypes = {
    items : propTypes.dbs,
  }

  render() {
    const { items } = this.props;

    return (
      <div className={ styles.Root }>
        <For each="db" of={ items }>
          <button className={ styles.Database } key={ `db-picker-${db.get('title')}` }>
            { db.get('title') }
          </button>
        </For>
      </div>
    );
  }
}
