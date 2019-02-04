import React, { Component } from 'react';
import styles from './Register.module.scss';
import { connect } from 'react-redux';

import FormWrapper from './forms/FormWrapper';
import RegisterForm from './forms/RegisterForm';
import Card from './common/Card';
import NavLayout from './layouts/NavLayout';

import { registerUser } from '../actions/authActions';

class Register extends Component {
  handleSubmit = (values) => {
    this.props.registerUser({
      email: values.email,
      password: values.password1,
      firstName: values.firstName,
      lastName: values.lastName
    });
  };

  render() {
    return (
      <NavLayout>
        <div className={styles['register']}>
          <div className={styles['register__header']}>
            <h2>Welcome to Group Fantasy Football League</h2>
          </div>
          <div className='offset-4 col-4'>
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
      </NavLayout>
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
