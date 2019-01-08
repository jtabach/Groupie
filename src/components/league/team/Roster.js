import React, { Component } from 'react';
import { connect } from 'react-redux';

import RosterCard from './RosterCard';

import { fetchFantasyRoster } from '../../../actions/fantasyActions';

class Roster extends Component {
  componentDidMount() {
    const { fetchFantasyRoster, league, team } = this.props;

    fetchFantasyRoster(league.fantasyLeagueId, team.fantasyTeamId);
  }

  renderRosterCards(roster) {
    return (
      <div>
        <RosterCard slots={roster.slots[0]} headerName={'Starters'} />
        <RosterCard slots={roster.slots[1]} headerName={'Bench'} />
      </div>
    );
  }

  render() {
    const { roster } = this.props.fantasy;

    return (
      <div>
        { roster ?
          <div>
            <p>{roster.info.teamLocation} {roster.info.teamNickname}</p>
            <p>Division Rank: {roster.info.divisionStanding} {roster.info.divisionName}</p>
            <p>Overall Rank: {roster.info.overallStanding }</p>
            {this.renderRosterCards(roster)}
          </div>
          : null
        }
      </div>
    )
  }
}

function mapStateToProps({ fantasy }) {
  return { fantasy };
}

export default connect(mapStateToProps, {fetchFantasyRoster})(Roster);