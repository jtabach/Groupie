import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFantasyScoreboard } from '../../../actions/fantasyActions';

import ScoreCard from './ScoreCard';

class Scoreboard extends Component {
  componentDidMount() {
    this.props.fetchFantasyScoreboard('1943495', 12)
  }

  renderScoreCards() {
    const { scores } = this.props.fantasy;
    console.log(scores);
    if (!scores) {
      return null;
    }

    return scores.map(score => {
      return (
        <ScoreCard key={Math.random()} matchups={score.teams}/>
      );
    })
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

function mapStateToProps({ fantasy }) {
  return { fantasy };
}

export default connect(mapStateToProps, { fetchFantasyScoreboard })(Scoreboard);