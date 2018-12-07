import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavLayout from '../layouts/NavLayout';
import Hero from './Hero';

import { fetchUser } from '../../actions/authActions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <NavLayout>
        <Hero />
      </NavLayout>
    );
  }
}

export default connect(null, { fetchUser })(Home);
