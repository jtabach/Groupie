import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import RegisterForm from './forms/RegisterForm';

import { registerUser } from '../actions/authActions';

class Register extends Component {
  handleSubmit = values => {
    this.props.registerUser({
      email: values.email,
      password: values.password1
    });
  };

  render() {
    return (
      <div>
        <div>This is the Register screen</div>
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default hot(module)(connect(null, { registerUser })(Register));
