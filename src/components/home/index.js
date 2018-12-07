import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavLayout from '../layouts/NavLayout';
import Hero from './Hero';
import About from './About';

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
      </NavLayout>
    );
  }
}

export default connect(null, { fetchUser })(Home);
