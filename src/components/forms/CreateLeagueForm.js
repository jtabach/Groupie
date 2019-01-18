import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Form.module.scss';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate } from './validation/createLeague';

let CreateLeagueForm = props => {
  const { handleSubmit, errorMessage, isLoading } = props;

  return (
    <form onSubmit={handleSubmit}>
      <p className={styles["error-message"]}>{errorMessage}</p>
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
          label="Fantasy League Id (optional)"
          component={RenderField}
        />
      </div>
      <div className={styles["field"]}>
        <Field
          name="espnCookieS2"
          type="text"
          label="ESPN S2 Cookie (optional)"
          placeholder="somehash"
          component={RenderField}
        />
      </div>
      <div className={styles["field"]}>
        <Field
          name="espnCookieSwid"
          type="text"
          label="ESPN SWID Cookie (optional)"
          placeholder="{somehash}"
          component={RenderField}
        />
      </div>
      <div className={styles["button"]}>
        <ButtonTest
          label="Create League"
          type="submit"
          size="large"
          variant="primary"
          isLoading={isLoading}
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
