import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavLayout from '../layouts/NavLayout';
import Routes from './Routes';
import LeagueList from './LeagueList';
import LeagueButtons from './LeagueButtons';
import Friends from './Friends';

import styles from './index.module.scss';

import { fetchUser } from '../../actions/authActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { match } = this.props;

    return (
      <NavLayout>
        <div className={styles["me"]}>
          <div className={styles["contain"]}>
            <div className={styles["col-left"]}>
              <LeagueList />
            </div>
            <div className={styles["col-center"]}>
              <Routes match={match} />
            </div>
            <div className={styles["col-right"]}>
              <LeagueButtons match={match} />
              <Friends />
            </div>
          </div>
        </div>
      </NavLayout>
    );
  }
}

export default connect(null, { fetchUser })(App);
