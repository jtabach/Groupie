import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../prop-types';
import styles from './index.module.scss';

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
          <div className={["league"]}>
            <div className={["contain"]}>
              <div className={["col-left"]}>
                <LeagueMenu match={match} league={league} />
              </div>
              <div className={["col-center"]}>
                <LeagueRoutes match={match} />
              </div>
              <div className={["col-left"]}>
                <LeagueFeed />
              </div>
            </div>
          </div>
        </NavLayout>
      </div>
    );
  }
}

export default League;
