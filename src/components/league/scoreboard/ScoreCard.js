import React, { Component } from 'react';
import styles from './ScoreCard.module.scss';

class ScoreCard extends Component {
  renderScores() {
    const { matchups } = this.props;
    return (
      <div className={styles['score-card']}>
        {matchups.map(team => {
          return (
            <div key={team.teamId} className={styles['score-row']}>
              <div className={styles['score-row__name']}>
                {team.team.teamLocation} {team.team.teamNickname}
              </div>
              <div className={styles['score-row__points']}>{team.score}</div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return <li>{this.renderScores()}</li>;
  }
}

export default ScoreCard;
