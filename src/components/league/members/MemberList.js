import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MemberList.module.scss';

class MemberList extends Component {
  renderLeagueMembers(league) {
    return league.teams.map(team => {
      return (
        <li className={styles["member-item"]} key={team._id}>
          <Link to={`/league/${league._id}/team/${team._id}`}>
            {team.user.firstName} {team.user.lastName}
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <ul className={styles["member-list"]}>
        {this.renderLeagueMembers(this.props.league)}
      </ul>
    )
  }
}

export default MemberList;