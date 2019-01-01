import React, { Component } from 'react';
import { connect } from 'react-redux';

import FantasyLeagueIdForm from '../forms/FantasyLeagueIdForm';

import { setFantasyLeagueId } from '../../actions/fantasyActions';

class FantasyLeagueIdPrompt extends Component {
  handleSubmit = values => {
    this.props.setFantasyLeagueId(values, this.props.league._id);
  };

  render() {
    return (
      <div>
        <h4>An ESPN Fantasy League Id has not been entered yet</h4>
        <FantasyLeagueIdForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

function mapStateToProps({ league }) {
  return { league };
}

export default connect(mapStateToProps, { setFantasyLeagueId })(FantasyLeagueIdPrompt);
