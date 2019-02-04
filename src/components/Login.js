import React, { Component } from 'react';
import styles from './Login.module.scss';
import { connect } from 'react-redux';

import FormWrapper from './forms/FormWrapper';
import LoginForm from './forms/LoginForm';
import Card from './common/Card';
import NavLayout from './layouts/NavLayout';

import { loginUser } from '../actions/authActions';

class Login extends Component {
  handleSubmit = (values) => {
    this.props.loginUser(values);
  };

  render() {
    return (
      <NavLayout>
        <div className={styles['login']}>
          <div className={styles['login__header']}>
            <h2>Welcome to Group Fantasy Football League</h2>
          </div>
          <div className='offset-4 col-4'>
            <Card>
              <FormWrapper
                formTitle={'Login With Your Email'}
                form={
                  <LoginForm
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
  { loginUser }
)(Login);
