import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

export class LogoutButton extends Component {
  render() {
    return <div onClick={() => this.props.logoutUser()}>logout</div>;
  }
}

export default connect(
  null,
  { logoutUser }
)(LogoutButton);
