import React, { Component } from 'react';
import styles from './RosterCard.module.scss';

class RosterCard extends Component {
  renderRosterRow() {
    const { slots } = this.props;

    return slots.map(slot => {
      if (slot.player) {
        return (
          <li key={Math.random()} className={styles['roster-row']}>
            <div className={styles['roster-row__slot']}>
              {slot.slotPosition}
            </div>
            <div className={styles['roster-row__name']}>
              {slot.player.firstName} {slot.player.lastName},{' '}
              {slot.defaultPosition}
            </div>
          </li>
        );
      }
      return null;
    });
  }

  render() {
    return (
      <div className={styles['roster']}>
        <h4 className={styles['roster__header']}>{this.props.headerName}</h4>
        <ul className={styles['roster-card']}>
          <li
            key={Math.random()}
            className={`${styles['roster-row']} ${styles['roster-row-header']}`}
          >
            <div className={styles['roster-row__slot']}>Slot</div>
            <div className={styles['roster-row__name']}>Name</div>
          </li>
          {this.renderRosterRow()}
        </ul>
      </div>
    );
  }
}

export default RosterCard;
