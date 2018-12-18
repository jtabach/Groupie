import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuList.module.scss';

import MenuItem from './MenuItem';

class MenuList extends Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  };

  renderMenuItems() {
    const { match } = this.props;

    const menuItems = [
      { name: 'TimeLine', path: '' },
      { name: 'My Team', path: '/myteam' },
      { name: 'Members', path: '/members' },
      { name: 'League Info', path: '/leagueinfo' },
      { name: 'Standings', path: '/standings' }
    ];

    return menuItems.map((item, i) => {
      return <MenuItem item={item} match={match} key={i} />;
    });
  }

  render() {
    return <ul className={styles["menu-list"]}>{this.renderMenuItems()}</ul>;
  }
}

export default MenuList;
