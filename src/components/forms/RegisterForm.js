import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate, warn } from './validation/register';
import styles from './Form.module.scss';

let RegisterForm = props => {
  const { handleSubmit, errorMessage, isLoading } = props;
  return (
    <form onSubmit={handleSubmit}>
      <p className={styles['error-message']}>{errorMessage}</p>
      <div className={styles['field']}>
        <Field
          name="firstName"
          type="text"
          label="First Name"
          component={RenderField}
        />
      </div>
      <div className={styles['field']}>
        <Field
          name="lastName"
          type="text"
          label="Last Name"
          component={RenderField}
        />
      </div>
      <div className={styles['field']}>
        <Field
          name="email"
          type="email"
          label="Email"
          component={RenderField}
        />
      </div>
      <div className={styles['field']}>
        <Field
          name="password1"
          type="password"
          label="Password"
          component={RenderField}
        />
      </div>
      <div className={styles['field']}>
        <Field
          name="password2"
          type="password"
          label="Password"
          component={RenderField}
        />
      </div>
      <div className={styles['button']}>
        <ButtonTest
          label="Register"
          type="submit"
          size="large"
          variant="primary"
          isLoading={isLoading}
        />
      </div>
    </form>
  );
};

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register',
  validate,
  warn
})(RegisterForm);

export default RegisterForm;
