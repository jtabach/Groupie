import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import LoginForm from './forms/LoginForm';

import { loginUser } from '../actions/authActions';

class Login extends Component {
  handleSubmit = values => {
    this.props.loginUser(values);
  };

  render() {
    return (
      <div>
        <div>This is the Login screen</div>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default hot(module)(connect(null, { loginUser })(Login));
