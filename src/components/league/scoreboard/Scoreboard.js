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
    console.log(this.props.fantasy.scoreboard);
    return (
      <div>
        <h2>Scoreboard</h2>
        <ul>{this.renderScoreCards()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ fantasy }) {
  return { fantasy };
}

export default connect(mapStateToProps, { fetchFantasyScoreboard })(Scoreboard);
