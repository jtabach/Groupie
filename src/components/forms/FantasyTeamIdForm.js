import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate } from './validation/fantasyTeamId';
import styles from './Form.module.scss';

let FantasyTeamIdForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["field"]}>
        <Field
          name="fantasyTeamId"
          type="text"
          label="Fantasy Team Id *"
          placeholder="espn fantasy team id"
          component={RenderField}
        />
      </div>
      <ButtonTest
        label="Submit Team Id"
        type="submit"
        size="large"
        variant="primary"
      />
    </form>
  );
};

FantasyTeamIdForm = reduxForm({
  form: 'fantasyTeamId',
  validate
})(FantasyTeamIdForm);

export default FantasyTeamIdForm;