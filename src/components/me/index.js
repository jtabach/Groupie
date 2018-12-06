import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import NavLayout from '../layouts/NavLayout';
import Routes from './Routes';
import LeagueList from './LeagueList';
import LeagueButtons from './LeagueButtons';
import Friends from './Friends';

import styles from './index.scss';

import { fetchUser } from '../../actions/authActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { match } = this.props;

    return (
      <NavLayout>
        <div styleName="me">
          <div styleName="contain">
            <div styleName="col-left">
              <LeagueList />
            </div>
            <div styleName="col-center">
              <Routes match={match} />
            </div>
            <div styleName="col-right">
              <LeagueButtons match={match} />
              <Friends />
            </div>
          </div>
        </div>
      </NavLayout>
    );
  }
}

export default hot(module)(
  connect(null, { fetchUser })(CSSModules(App, styles))
);
