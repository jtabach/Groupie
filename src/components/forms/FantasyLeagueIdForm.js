import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate } from './validation/fantasyLeagueId';
import styles from './Form.module.scss';

let FantasyLeagueIdForm = props => {
  const { handleSubmit, errorMessage, successMessage, isLoading } = props;

  return (
    <form onSubmit={handleSubmit}>
      <p className={styles["error-message"]}>{errorMessage}</p>
      <p className={styles["success-message"]}>{successMessage}</p>
      <div className={styles["field"]}>
        <Field
          name="fantasyLeagueId"
          type="text"
          label="Fantasy League Id *"
          placeholder="espn fantasy league id"
          component={RenderField}
        />
      </div>
      <ButtonTest
        label="Submit League Id"
        type="submit"
        size="large"
        variant="primary"
        isLoading={isLoading}
      />
    </form>
  );
};

FantasyLeagueIdForm = reduxForm({
  form: 'fantasyLeagueId',
  validate
})(FantasyLeagueIdForm);

export default FantasyLeagueIdForm;