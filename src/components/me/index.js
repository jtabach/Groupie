import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavLayout from '../layouts/NavLayout';
import Routes from './Routes';
import LeagueList from './LeagueList';
import LeagueButtons from './LeagueButtons';
import Friends from './Friends';

import styles from './index.module.scss';

import { fetchUser } from '../../actions/authActions';

class Me extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { match } = this.props;
    console.log(process.env);

    return (
      <NavLayout>
        <div className={`${styles['me']}`}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <LeagueList />
              </div>
              <div className="col-6">
                <Routes match={match} />
              </div>
              <div className="col-3">
                <LeagueButtons match={match} />
                <Friends />
              </div>
            </div>
          </div>
        </div>
      </NavLayout>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(Me);
