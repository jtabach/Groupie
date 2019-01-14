import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './forms/LoginForm';
import Card from './common/Card';

import styleFormWrapper from './forms/FormWrapper.module.scss';


import { loginUser } from '../actions/authActions';

class Login extends Component {
  handleSubmit = values => {
    this.props.loginUser(values);
  };

  render() {
    return (
      <div>
        <div className='offset-3 col-6'>
          <Card>
            <div className={styleFormWrapper["header"]}>
              <h2 className={styleFormWrapper["title"]}>Login</h2>
            </div>
            <div className={styleFormWrapper["card-content"]}>
              <LoginForm onSubmit={this.handleSubmit} />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(null, { loginUser })(Login);
