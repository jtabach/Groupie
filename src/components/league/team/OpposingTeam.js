import React, { Component } from 'react';
import { connect } from 'react-redux';

import Roster from './Roster';

class OpposingTeam extends Component {
  renderUsername() {
    const team = this._getTeamFromTeamIdParam();

    return (
      <h4>
        {team.user.firstName} {team.user.lastName}
      </h4>
    );
  }

  renderOpposingTeam() {
    const { league } = this.props;
    const team = this._getTeamFromTeamIdParam();

    if (!league.fantasyLeagueId) {
      return <div>This league has not yet been set up for fantasy</div>;
    } else if (!team.espnCookieString) {
      return (
        <div>
          <div>This team has not yet added their fantasy espn auth</div>
        </div>
      );
    } else {
      return <Roster league={league} team={team} />;
    }
  }

  _getTeamFromTeamIdParam() {
    const { teamId } = this.props.match.params;

    return this.props.league.teams.find(team => {
      return team._id === teamId;
    });
  }

  render() {
    return (
      <div>
        <h2>Opposing Team</h2>
        {this.renderUsername()}
        {this.renderOpposingTeam()}
      </div>
    );
  }
}

function mapStateToProps({ league }) {
  return { league };
}

export default connect(mapStateToProps)(OpposingTeam);
