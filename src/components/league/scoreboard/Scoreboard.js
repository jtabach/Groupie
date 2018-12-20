import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFantasyScoreboard } from '../../../actions/fantasyActions';

import ScoreWeekSelect from './ScoreWeekSelect';
import ScoreCard from './ScoreCard';

class Scoreboard extends Component {
  state = {
    matchupPeriod: 1
  };

  componentDidMount() {
    this.props.fetchFantasyScoreboard('1943495', this.state.matchupPeriod)
  }

  handleMatchupPeriodChange(event) {
    this.setState(
      { matchupPeriod: event.target.value },
      () => this.props.fetchFantasyScoreboard('1943495', this.state.matchupPeriod)
    );
  }

  renderScoreCards() {
    const { scores } = this.props.fantasy;
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
        <ScoreWeekSelect
          numWeeks={16}
          onHandleChange={this.handleMatchupPeriodChange.bind(this)}
        />
        <ul>{this.renderScoreCards()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ fantasy }) {
  return { fantasy };
}

export default connect(mapStateToProps, { fetchFantasyScoreboard })(Scoreboard);
