import CodeMirror               from 'react-codemirror';
import React, { PureComponent } from 'react';
import styles                   from './styles';

require('codemirror/mode/sql/sql');
require('codemirror/lib/codemirror.css');

const options = {
  lineNumbers : true,
  mode        : 'sql',
};

export default class Editor extends PureComponent {
  static propTypes = {}

  state = {
    sql : '',
  }

  updateSql = (sql) => this.setState({ sql })

  render() {
    return (
      <div className={ styles.Root }>
        <CodeMirror
          onChange={ this.updateSql }
          options={ options }
          value={ this.state.sql }
        />
      </div>
    );
  }
}
