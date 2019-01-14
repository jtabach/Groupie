import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate, warn } from './validation/login';
import styles from './Form.module.scss';

let LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["field"]}>
        <Field
          name="email"
          type="email"
          label="Email"
          component={RenderField}
        />
      </div>
      <div className={styles["field"]}>
        <Field
          name="password"
          type="password"
          label="Password"
          component={RenderField}
        />
      </div>
      <div className={styles["button"]}>
        <ButtonTest
          label="Login"
          type="submit"
          size="large"
          variant="primary"
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'login',
  validate,
  warn
})(LoginForm);
