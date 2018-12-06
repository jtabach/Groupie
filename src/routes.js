import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import App from './components/App';
import Me from './components/me';
import League from './containers/league';
import CreateLeague from './components/me/CreateLeague';

import Typography from './components/demos/Typography';

import withAuth from './middleware/withAuth';
import withoutAuth from './middleware/withoutAuth';

export default (
  <Switch>
    <Route exact path="/" component={withAuth(App)} />
    <Route exact path="/login" component={withAuth(Login)} />
    <Route exact path="/register" component={withAuth(Register)} />
    <Route path="/me" component={withoutAuth(Me)} />
    <Route path="/league/:leagueId" component={League} />
    <Route path="/typography" component={Typography} />
  </Switch>
);
