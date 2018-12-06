import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAuthDemo } from '../../actions/demoActions';

class DemoAuth extends Component {
  _handleClick() {
    this.props.fetchAuthDemo();
  }

  render() {
    return <button onClick={() => this._handleClick()}>Google Login</button>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchAuthDemo })(DemoAuth);
