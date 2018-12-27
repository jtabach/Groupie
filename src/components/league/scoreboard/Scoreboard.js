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
    this.props.fetchFantasyScoreboard(this.props.league.fantasyLeagueId, this.state.matchupPeriod)
  }

  handleMatchupPeriodChange(event) {
    this.setState(
      { matchupPeriod: event.target.value },
      () => this.props.fetchFantasyScoreboard(this.props.league.fantasyLeagueId, this.state.matchupPeriod)
    );
  }

  renderScoreboard() {
    const { fantasyLeagueId } = this.props.league;

    if (!fantasyLeagueId) {
      return (
        <div>Need Fantasy League Info</div>
      );
    }
    return (
      <div>
        <ScoreWeekSelect
          numWeeks={16}
          onHandleChange={this.handleMatchupPeriodChange.bind(this)}
        />
        <ul>{this.renderScoreCards()}</ul>
      </div>
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
        {this.renderScoreboard()}
      </div>
    );
  }
}

function mapStateToProps({ fantasy, league }) {
  return { fantasy, league };
}

export default connect(mapStateToProps, { fetchFantasyScoreboard })(Scoreboard);
