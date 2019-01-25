import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchUser } from '../actions/authActions';

function withAuth(InnerComponent) {
  class ProtectedRoute extends Component {
    componentDidMount() {
      this.props.fetchUser();
    }

    renderComponent() {
      switch (this.props.user._id) {
        case null:
          // TODO: render a loading spinner
          return <div />;
        case false:
          return <InnerComponent {...this.props} />;
        default:
          return <Redirect to="/me" />;
      }
    }

    render() {
      return <div>{this.renderComponent()}</div>;
    }
  }

  function mapStateToProps({ user }) {
    return { user };
  }

  return connect(
    mapStateToProps,
    { fetchUser }
  )(ProtectedRoute);
}

export default withAuth;
