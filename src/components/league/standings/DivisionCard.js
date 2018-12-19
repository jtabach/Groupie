import React, { Component } from 'react';
import styles from './DivisionCard.module.scss'

class DivisionCard extends Component {
  renderTeamRow() {
    const { division } = this.props;

    return division.map(team => {
      return (
        <li key={team.owners[0].ownerId} className={styles['division-row']}>
          <div className={styles['division-row__name']}>{team.teamLocation} {team.teamNickname}</div>
          <div className={styles['division-row__wins']}>{team.record.overallWins}</div>
          <div className={styles['division-row__losses']}>{team.record.overallLosses}</div>
          <div className={styles['division-row__ties']}>{team.record.overallTies}</div>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className={styles['division-card']}>
        <li key={Math.random()} className={`${styles['division-row']} ${styles['division-row-header']}`}>
          <div className={styles['division-row__name']}>Name</div>
          <div className={styles['division-row__wins']}>Wins</div>
          <div className={styles['division-row__losses']}>Losses</div>
          <div className={styles['division-row__ties']}>Ties</div>
        </li>
        {this.renderTeamRow()}
      </ul>
    )
  }
}

export default DivisionCard;