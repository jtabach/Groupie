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
          name="espnCookieS2"
          type="text"
          label="ESPN S2 Cookie *"
          placeholder="somehash"
          component={RenderField}
        />
      </div>
      <div className={styles["field"]}>
        <Field
          name="espnCookieSwid"
          type="text"
          label="ESPN SWID Cookie *"
          placeholder="{somehash}"
          component={RenderField}
        />
      </div>
      <ButtonTest
        label="Submit ESPN Cookies"
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