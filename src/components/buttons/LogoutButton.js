import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, fetchUser } from '../../actions/authActions';

class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logoutUser();
  }

  render() {
    return <div onClick={this.handleClick}>logout</div>;
  }
}

export default connect(
  null,
  { logoutUser, fetchUser }
)(LogoutButton);
