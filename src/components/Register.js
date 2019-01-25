import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormWrapper from './forms/FormWrapper';
import RegisterForm from './forms/RegisterForm';
import Card from './common/Card';

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
        <div className="offset-4 col-4">
          <Card>
            <FormWrapper
              formTitle={'Register With Your Email'}
              form={
                <RegisterForm
                  onSubmit={this.handleSubmit}
                  errorMessage={this.props.user.errorMessage}
                  isLoading={this.props.user.loading}
                />
              }
            />
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
