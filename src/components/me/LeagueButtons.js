import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './LeagueButtons.scss';

import Card from '../common/Card';
import LinkButton from '../common/LinkButton';

class LeagueButtons extends Component {
  render() {
    const { match } = this.props;

    return (
      <Card variant="dark">
        <div styleName="card-content">
          <h5 styleName="title">Join the Community</h5>
          <p styleName="copy">
            Talk with your friends and get a custom feed with updates from all
            your players
          </p>
          <div styleName="button">
            <LinkButton
              path={`${match.url}/joinLeague`}
              label="Join League"
              variant="primary-inverse"
              size="large"
            />
          </div>
          <div styleName="button">
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

export default CSSModules(LeagueButtons, styles);
