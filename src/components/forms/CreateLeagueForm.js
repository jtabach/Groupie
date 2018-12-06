import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CSSModules from 'react-css-modules';
import styles from './Form.scss';

import RenderField from './RenderField';
import Button from '../common/Button';
import { validate } from './validation/createLeague';

let CreateLeagueForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div styleName="field">
        <Field
          name="leagueName"
          type="text"
          label="League Name"
          component={RenderField}
        />
      </div>
      <div styleName="field">
        <Field
          name="teamName"
          type="text"
          label="Team Name"
          component={RenderField}
        />
      </div>
      <div styleName="button">
        <Button
          label="Create League"
          type="submit"
          size="large"
          variant="primary"
        />
      </div>
    </form>
  );
};

CreateLeagueForm = reduxForm({
  // a unique name for the form
  form: 'createLeague',
  validate
})(CSSModules(CreateLeagueForm, styles));

export default CreateLeagueForm;
