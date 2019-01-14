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
          label="Join League"
          type="submit"
          size="large"
          variant="primary"
        />
      </div>
    </form>
  );
};

JoinLeague = reduxForm({
  // a unique name for the form
  form: 'joinLeague',
  validate
})(JoinLeague);

export default JoinLeague;
