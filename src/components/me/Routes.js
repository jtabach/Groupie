import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CreateLeague from './CreateLeague';
import JoinLeague from './JoinLeague';
import RSSFeed from './RSSFeed';
import NotificationSettings from './notifications/NotificationSettings';

class Routes extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.url}`} component={RSSFeed} />
        <Route
          path={`${match.url}/notification-settings`}
          component={NotificationSettings}
        />
        <Route path={`${match.url}/createLeague`} component={CreateLeague} />
        <Route path={`${match.url}/joinLeague`} component={JoinLeague} />
      </div>
    );
  }
}

export default Routes;
