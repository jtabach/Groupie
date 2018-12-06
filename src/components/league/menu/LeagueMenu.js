import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';

import MenuList from './MenuList';

class LeagueMenu extends Component {
  static propTypes = {
    league: CustomPropTypes.league.isRequired,
    match: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { league, match } = this.props;

    return (
      <div>
        <h5 style={{ marginBottom: '12px' }}>{league.name}</h5>
        <MenuList match={match} />
      </div>
    );
  }
}

export default LeagueMenu;
