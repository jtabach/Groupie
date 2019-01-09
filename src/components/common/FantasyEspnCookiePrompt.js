import React, { Component } from 'react';
import { connect } from 'react-redux';

import FantasyEspnCookieForm from '../forms/FantasyEspnCookieForm';

import { setFantasyTeamId } from '../../actions/fantasyActions';

class FantasyEspnCookiePrompt extends Component {
  handleSubmit = values => {
    this.props.setFantasyTeamId(values, this.props.teamId);
  };

  render() {
    return (
      <div>
        <h4>An ESPN Fantasy Team Id has not been entered yet</h4>
        <FantasyEspnCookieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { setFantasyTeamId })(FantasyEspnCookiePrompt);
