import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import CreateLeague from './CreateLeague';
import JoinLeague from './JoinLeague';
import RSSFeed from './RSSFeed';

class Routes extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.url}`} component={RSSFeed} />
        <Route path={`${match.url}/createLeague`} component={CreateLeague} />
        <Route path={`${match.url}/joinLeague`} component={JoinLeague} />
      </div>
    );
  }
}

export default Routes;
