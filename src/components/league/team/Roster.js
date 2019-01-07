import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFantasyRoster } from '../../../actions/fantasyActions';

class Roster extends Component {
  componentDidMount() {
    const { fetchFantasyRoster, league, team } = this.props;

    fetchFantasyRoster(league.fantasyLeagueId, team.fantasyTeamId);
  }

  render() {
    return (
      <div>Roster</div>
    )
  }
}

export default connect(null, {fetchFantasyRoster})(Roster);