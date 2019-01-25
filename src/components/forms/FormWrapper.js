import React, { Component } from 'react';
import styles from './FormWrapper.module.scss';

class FormWrapper extends Component {
  render() {
    const { form, formTitle } = this.props;

    return (
      <div>
        <div className={styles['header']}>
          <h2 className={styles['title']}>{formTitle}</h2>
        </div>
        <div className={styles['card-content']}>{form}</div>
      </div>
    );
  }
}
export default FormWrapper;
