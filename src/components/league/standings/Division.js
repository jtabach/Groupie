import React, { Component } from 'react';
import styles from './Division.module.scss';

import DivisionCard from './DivisionCard';

class Division extends Component {
  render() {
    const { division } = this.props;

    return (
      <li className={styles['division']}>
        <h3 className={styles['division__header']}>{this.props.division[0].division.divisionName}</h3>
        <DivisionCard division={division} />
      </li>
    )
  }
}

export default Division;