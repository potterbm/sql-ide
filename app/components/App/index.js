import DatabasePicker           from 'components/DatabasePicker';
import Editor                   from 'components/Editor';
import React, { PureComponent } from 'react';
import Results                  from 'components/Results';
import styles                   from './styles';

export default class App extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className={ styles.Root }>
        <div className={ styles.Inline }>
          <h1 className={ styles.Heading }>Write Some SQL</h1>

          <div className={ styles.Column }>
            <DatabasePicker />
          </div>
        </div>

        <div className={ styles.Columns }>
          <div className={ styles.Column }>
            <Editor />
          </div>

          <div className={ styles.Column }>
            <Results />
          </div>
        </div>
      </div>
    );
  }
}
