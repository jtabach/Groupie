import React, { Component } from 'react';
import { connect } from 'react-redux';

import LinkCard from '..//common/LinkCard';

class LeagueList extends Component {
  renderLeagues() {
    const { user } = this.props;
    const teams = user.teams || [];

    return teams.map((team, i) => {
      return (
        <li key={team._id}>
          <LinkCard path={`/league/${team.league._id}`}>
            <p>{team.league.name}</p>
            <p>{team.name}</p>
          </LinkCard>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h5>List of the leagues</h5>
        <ul>{this.renderLeagues()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(LeagueList);
