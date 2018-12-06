import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import ButtonTest from '../common/ButtonTest';
import { validate } from './validation/joinLeague';

let JoinLeague = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="leagueId"
          type="text"
          label="League ID"
          component={RenderField}
        />
      </div>
      <div>
        <Field
          name="teamName"
          type="text"
          label="Team Name"
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
