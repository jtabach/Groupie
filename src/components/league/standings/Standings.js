import React, { Component } from 'react';
import { connect } from 'react-redux';

import Division from './Division';
import FantasyLeagueIdPrompt from '../../common/FantasyLeagueIdPrompt';

import { fetchFantasyStandings } from '../../../actions/fantasyActions';

class Standings extends Component {
  componentDidMount() {
    this.props.fetchFantasyStandings(this.props.league.fantasyLeagueId);
  }

  renderStandings() {
    const { fantasyLeagueId } = this.props.league;

    if (!fantasyLeagueId) {
      return (
        <FantasyLeagueIdPrompt />
      );
    }
    return (
      <ul>{this.renderDivisions()}</ul>
    );
  }

  renderDivisions() {
    const { standings } = this.props.fantasy;
    if (!standings) {
      return null;
    }

    return Object.keys(standings).map(division => {
      return (<Division key={Math.random()} division={standings[division]} />)
    })
  }

  render() {
    return (
      <div>
        <h2>Standings</h2>
        {this.renderStandings()}
      </div>
    )
  }
}

function mapStateToProps({ fantasy,league }) {
  return { fantasy, league };
}

export default connect(mapStateToProps, { fetchFantasyStandings })(Standings);