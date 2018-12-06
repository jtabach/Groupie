import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import Button from '../common/Button';
import { validate, warn } from './validation/login';

let LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          type="email"
          label="Email"
          component={RenderField}
        />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          label="Password"
          component={RenderField}
        />
      </div>
      <Button label="Login" type="submit" size="large" variant="primary" />
    </form>
  );
};

LoginForm = reduxForm({
  form: 'login',
  validate,
  warn
})(LoginForm);

export default LoginForm;
