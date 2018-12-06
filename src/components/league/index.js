import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../prop-types';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

import NavLayout from '../layouts/NavLayout';
import LeagueRoutes from './LeagueRoutes';
import LeagueMenu from './menu/LeagueMenu';
import LeagueFeed from './LeagueFeed';

class League extends Component {
  static propTypes = {
    league: CustomPropTypes.league.isRequired,
    user: CustomPropTypes.user.isRequired,
    team: CustomPropTypes.team.isRequired,
    match: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { match, league, user } = this.props;

    return (
      <div>
        <NavLayout>
          <div styleName="league">
            <div styleName="contain">
              <div styleName="col-left">
                <LeagueMenu match={match} league={league} />
              </div>
              <div styleName="col-center">
                <LeagueRoutes match={match} />
              </div>
              <div styleName="col-left">
                <LeagueFeed />
              </div>
            </div>
          </div>
        </NavLayout>
      </div>
    );
  }
}

export default CSSModules(League, styles);
