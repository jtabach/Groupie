import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../prop-types';
import styles from './index.module.scss';

import NavLayout from '../layouts/NavLayout';
import LeagueRoutes from './LeagueRoutes';
import LeagueMenu from './menu/LeagueMenu';
import Newsfeed from './newsfeed/Newsfeed';

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
    const { match, league } = this.props;

    return (
      <div>
        <NavLayout>
          <div className={`${styles["league"]}`}>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <LeagueMenu match={match} league={league} />
                </div>
                <div className="col-6">
                  <LeagueRoutes match={match} />
                </div>
                <div className="col-4">
                  <Newsfeed />
                </div>
              </div>
            </div>
          </div>
        </NavLayout>
      </div>
    );
  }
}

export default League;
