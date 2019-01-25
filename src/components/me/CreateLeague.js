import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormWrapper from '../forms/FormWrapper';
import CreateLeagueForm from '../forms/CreateLeagueForm';
import Card from '../common/Card';

import { createLeague } from '../../actions/leagueActions';

class CreateLeague extends Component {
  handleSubmit = values => {
    this.props.createLeague(values);
  };

  render() {
    const { errorMessage, loading } = this.props.formLoading.createLeague;

    return (
      <Card>
        <FormWrapper
          formTitle={'Create Your League'}
          form={
            <CreateLeagueForm
              onSubmit={this.handleSubmit}
              errorMessage={errorMessage}
              isLoading={loading}
            />
          }
        />
      </Card>
    );
  }
}

function mapStateToProps({ formLoading }) {
  return { formLoading };
}

export default connect(
  mapStateToProps,
  { createLeague }
)(CreateLeague);
