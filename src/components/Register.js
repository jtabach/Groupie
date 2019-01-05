import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from './forms/RegisterForm';

import { registerUser } from '../actions/authActions';

class Register extends Component {
  handleSubmit = values => {
    this.props.registerUser({
      email: values.email,
      password: values.password1,
      firstName: values.firstName,
      lastName: values.lastName
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

export default connect(null, { registerUser })(Register);
