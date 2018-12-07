import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavLayout from '../layouts/NavLayout';
import Hero from './Hero';
import About from './About';
import Ready from './Ready';

import { fetchUser } from '../../actions/authActions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <NavLayout>
        <Hero />
        <About />
        <Ready />
      </NavLayout>
    );
  }
}

export default connect(null, { fetchUser })(Home);
