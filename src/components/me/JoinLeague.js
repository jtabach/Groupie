import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../forms/FormWrapper.module.scss';

import FormWrapper from '../forms/FormWrapper';
import JoinLeagueForm from '../forms/JoinLeagueForm';
import Card from '../common/Card';

import { joinLeague } from '../../actions/leagueActions';

class JoinLeague extends Component {
  handleSubmit = values => {
    this.props.joinLeague(values);
  };

  render() {
    return (
      <Card>
        <FormWrapper
          formTitle={'Join A League'}
          form={<JoinLeagueForm onSubmit={this.handleSubmit} />}
        />
      </Card>
    );
  }
}

export default connect(null, { joinLeague })(JoinLeague);
