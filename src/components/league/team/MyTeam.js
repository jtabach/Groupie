import React, { Component } from 'react';
import { connect } from 'react-redux';

import FantasyLeagueIdPrompt from '../../common/FantasyLeagueIdPrompt';
import FantasyEspnCookiePrompt from '../../common/FantasyEspnCookiePrompt';
import Roster from './Roster';


class MyTeam extends Component {
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
    } else if (!team.fantasyEspnAuthHash) {
      return (
        <div>
          <FantasyEspnCookiePrompt teamId={team._id} />
          <div>Some instructions for figuring out the fantasy team id</div>
        </div>
      )
    } else {
      return (
        <Roster league={league} team={team} />
      )
    }
  }

  render() {
    const { user } = this.props;
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

export default connect(mapStateToProps)(MyTeam);
