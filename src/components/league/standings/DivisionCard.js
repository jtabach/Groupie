import React, { Component } from 'react';

class DivisionCard extends Component {
  renderTeamRow() {
    const { division } = this.props;

    return division.map(team => {
      return (
        <li key={team.owners[0].ownerId}>
          <div>{team.teamLocation} {team.teamNickname}</div>
          <div>{team.record.overallWins}</div>
          <div>{team.record.overallLosses}</div>
          <div>{team.record.overallTies}</div>
        </li>
      )
    })
  }

  render() {
    return (
      <li>
        <ul>
          {this.renderTeamRow()}
        </ul>
      </li>
    )
  }
}

export default DivisionCard;