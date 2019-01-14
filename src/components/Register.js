import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from './forms/RegisterForm';
import Card from './common/Card';

import styleFormWrapper from './forms/FormWrapper.module.scss';

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
        <div className='offset-3 col-6'>
          <Card>
            <div className={styleFormWrapper["header"]}>
              <h2 className={styleFormWrapper["title"]}>Register</h2>
            </div>
            <div className={styleFormWrapper["card-content"]}>
              <RegisterForm onSubmit={this.handleSubmit} />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(null, { registerUser })(Register);
