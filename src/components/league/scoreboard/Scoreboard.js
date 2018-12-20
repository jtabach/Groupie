import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFantasyScoreboard } from '../../../actions/fantasyActions';

import ScoreCard from './ScoreCard';

class Scoreboard extends Component {
  componentDidMount() {
    this.props.fetchFantasyScoreboard('1943495', 12)
  }

  renderScoreCards() {
    return (
      <ScoreCard />
    );
  }

  render() {
    return (
      <div>
        <h2>Scoreboard</h2>
        <ul>{this.renderScoreCards()}</ul>
      </div>
    );
  }
}

export default connect(null, { fetchFantasyScoreboard })(Scoreboard);
