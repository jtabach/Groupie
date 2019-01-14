import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../forms/FormWrapper.module.scss';

import FormWrapper from '../forms/FormWrapper';
import CreateLeagueForm from '../forms/CreateLeagueForm';
import Card from '../common/Card';

import { createLeague } from '../../actions/leagueActions';

class CreateLeague extends Component {
  handleSubmit = values => {
    this.props.createLeague(values);
  };

  render() {
    return (
      <Card>
        <FormWrapper
          formTitle={'Create Your League'}
          form={<CreateLeagueForm onSubmit={this.handleSubmit} />}
        />
      </Card>
    );
  }
}

export default connect(null, { createLeague })(CreateLeague);
