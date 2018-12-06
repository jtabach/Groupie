import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavLayout from './layouts/NavLayout';

import { fetchUser } from '../actions/authActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <NavLayout>
        <p>This is my new react app</p>
      </NavLayout>
    );
  }
}

export default connect(null, { fetchUser })(App);
