import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate } from './validation/joinLeague';
import styles from './Form.module.scss';

let JoinLeague = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["field"]}>
        <Field
          name="leagueId"
          type="text"
          label="League Id *"
          placeholder="league id"
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
      <ButtonTest
        label="Join League"
        type="submit"
        size="large"
        variant="primary"
      />
    </form>
  );
};

JoinLeague = reduxForm({
  // a unique name for the form
  form: 'joinLeague',
  validate
})(JoinLeague);

export default JoinLeague;
