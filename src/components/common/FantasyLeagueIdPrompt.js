import React, { Component } from 'react';
import { connect } from 'react-redux';

import FantasyLeagueIdForm from '../forms/FantasyLeagueIdForm';

import { setFantasyLeagueId } from '../../actions/fantasyActions';

class FantasyLeagueIdPrompt extends Component {
  handleSubmit = values => {
    this.props.setFantasyLeagueId(values, this.props.league._id);
  };

  render() {
    const { promptText } = this.props;

    return (
      <div>
        <h4>{promptText}</h4>
        <FantasyLeagueIdForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { setFantasyLeagueId })(FantasyLeagueIdPrompt);
