import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate } from './validation/fantasyEspnCookie';
import styles from './Form.module.scss';

let FantasyEspnCookieForm = props => {
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

FantasyEspnCookieForm = reduxForm({
  form: 'fantasyEspnCookie',
  validate
})(FantasyEspnCookieForm);

export default FantasyEspnCookieForm;