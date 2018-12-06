import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
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
      <ButtonTest label="Login" type="submit" size="large" variant="primary" />
    </form>
  );
};

export default reduxForm({
  form: 'login',
  validate,
  warn
})(LoginForm);
