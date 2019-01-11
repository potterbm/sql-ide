import { Formik }               from 'formik';
import * as propTypes           from 'constants/propTypes';
import React, { PureComponent } from 'react';
import styles                   from './styles';

const initialState = {
  filename : '',
  title    : '',
  type     : '',
};

export default class DatabaseForm extends PureComponent {
  static propTypes = {
    isVisible : PropTypes.bool
  }

  getRootClasses = () => [
    this.props.isVisible ? styles.isVisible : '',
    styles.Root,
  ].join(' ')

  renderForm() {
    const { items } = this.props;

    return (
      <div className={ this.getRootClasses() }>
        <form className={ styles.Form }>
          <div className={ styles.Field } />
        </form>
      </div>
    );
  }

  render() {
    return (
      <Formik
        render={ this.renderForm }
      />
    );
  }
}
