import React, { Component } from 'react';
import { connect } from 'react-redux';

import FantasyTeamIdForm from '../forms/FantasyTeamIdForm';

import { setFantasyTeamId } from '../../actions/fantasyActions';

class FantasyTeamIdPrompt extends Component {
  handleSubmit = values => {
    this.props.setFantasyTeamId(values, this.props.teamId);
  };

  render() {
    return (
      <div>
        <h4>An ESPN Fantasy Team Id has not been entered yet</h4>
        <FantasyTeamIdForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { setFantasyTeamId })(FantasyTeamIdPrompt);
