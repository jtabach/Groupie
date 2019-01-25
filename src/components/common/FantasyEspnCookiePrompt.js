import React, { Component } from 'react';
import { connect } from 'react-redux';

import FantasyEspnCookieForm from '../forms/FantasyEspnCookieForm';

import { setFantasyEspnCookies } from '../../actions/fantasyActions';

class FantasyEspnCookiePrompt extends Component {
  handleSubmit = values => {
    this.props.setFantasyEspnCookies(values, this.props.teamId);
  };

  render() {
    return (
      <div>
        <h4>An ESPN Auth Cookies have not been entered yet</h4>
        <FantasyEspnCookieForm onSubmit={this.handleSubmit} />
        <p>Why do I need to enter this?</p>
      </div>
    );
  }
}

export default connect(
  null,
  { setFantasyEspnCookies }
)(FantasyEspnCookiePrompt);
