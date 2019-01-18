import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormWrapper from '../forms/FormWrapper';
import JoinLeagueForm from '../forms/JoinLeagueForm';
import Card from '../common/Card';

import { joinLeague } from '../../actions/leagueActions';

class JoinLeague extends Component {
  handleSubmit = values => {
    this.props.joinLeague(values);
  };

  render() {
    const { errorMessage, loading } = this.props.formLoading.joinLeague;
    
    return (
      <Card>
        <FormWrapper
          formTitle={'Join A League'}
          form={
            <JoinLeagueForm
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

export default connect(mapStateToProps, { joinLeague })(JoinLeague);
