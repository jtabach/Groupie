import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormWrapper from './forms/FormWrapper';
import LoginForm from './forms/LoginForm';
import Card from './common/Card';

import { loginUser } from '../actions/authActions';

class Login extends Component {
  handleSubmit = values => {
    this.props.loginUser(values);
  };

  render() {
    return (
      <div>
        <div className='offset-4 col-4'>
          <Card>
            <FormWrapper
              formTitle={'Login With Your Email'}
              form={<LoginForm onSubmit={this.handleSubmit} />}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(null, { loginUser })(Login);
