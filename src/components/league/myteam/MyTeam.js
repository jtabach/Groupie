import React, { Component } from 'react';
import { connect } from 'react-redux';

import FantasyLeagueIdPrompt from '../../common/FantasyLeagueIdPrompt';
import FantasyTeamIdPrompt from '../../common/FantasyTeamIdPrompt';

import { fetchFantasyRoster } from '../../../actions/fantasyActions';

class MyTeam extends Component {
  componentDidMount() {
    const { league, team } = this.props;

    if (league.fantasyLeagueId && team.fantasyTeamId) {
      this.props.fetchFantasyRoster(league.fantasyLeagueId, team.fantasyTeamId);
    }
  }

  renderMyTeam() {
    const { league, team } = this.props;

    if (!league.fantasyLeagueId) {
      if (team.user === league.admin) {
        return (
          <FantasyLeagueIdPrompt />
        )
      } else {
        return (
          <div>The admin has not yet added the fantasy league id</div>
        )
      }
    } else if (!team.fantasyTeamId) {
      return (
        <div>
          <FantasyTeamIdPrompt teamId={team._id} />
          <div>Some instructions for figuring out the fantasy team id</div>
        </div>
      )
    } else {
      return (
        <div>The team roster</div>
      )
    }
  }

  render() {
    const { user, team } = this.props;
    return (
      <div>
        <h2>My Team</h2>
        <h4>{user.firstName} {user.lastName}</h4>
        {this.renderMyTeam()}
      </div>
    );
  }
}

function mapStateToProps({ team, user, league }) {
  return { team, user, league }
}

export default connect(mapStateToProps, { fetchFantasyRoster })(MyTeam);
