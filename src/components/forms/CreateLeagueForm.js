import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Form.module.scss';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate } from './validation/createLeague';

let CreateLeagueForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["field"]}>
        <Field
          name="leagueName"
          type="text"
          label="League Name *"
          placeholder="league name"
          component={RenderField}
        />
      </div>
      <div className={styles["field"]}>
        <Field
          name="fantasyLeagueId"
          type="text"
          placeholder="fantasy league id"
          label="Fantasy League Id"
          component={RenderField}
        />
      </div>
      <div className={styles["field"]}>
        <Field
          name="fantasyTeamId"
          type="text"
          label="Fantasy Team Id"
          placeholder="fantasy team id"
          component={RenderField}
        />
      </div>
      <div className={styles["button"]}>
        <ButtonTest
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
})(CreateLeagueForm);

export default CreateLeagueForm;
