import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Members extends Component {
  renderLeagueMembers() {
    const { league } = this.props;

    return league.teams.map(team => {
      return (
        <li key={team._id}>
          <Link to={`/league/${league._id}/team/${team._id}`}>{team.user.firstName} {team.user.lastName}</Link>
        </li>
      )
    });
  }

  render() {

    return (
      <div>
        <h2>League Members</h2>
        <ul>{this.renderLeagueMembers()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ league }) {
  return { league };
}

export default connect(mapStateToProps)(Members);
