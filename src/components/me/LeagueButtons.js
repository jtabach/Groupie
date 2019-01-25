import React, { Component } from 'react';
import styles from './LeagueButtons.module.scss';

import Card from '../common/Card';
import LinkButton from '../common/LinkButton';

class LeagueButtons extends Component {
  render() {
    const { match } = this.props;

    return (
      <Card variant="dark">
        <div className={styles['card-content']}>
          <h5 className={styles['title']}>Join the Community</h5>
          <p className={styles['copy']}>
            Talk with your friends and get a custom feed with updates from all
            your players
          </p>
          <div className={styles['button']}>
            <LinkButton
              path={`${match.url}/joinLeague`}
              label="Join League"
              variant="primary-inverse"
              size="large"
            />
          </div>
          <div className={styles['button']}>
            <LinkButton
              path={`${match.url}/createLeague`}
              label="Create League"
              variant="green"
              size="large"
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default LeagueButtons;
