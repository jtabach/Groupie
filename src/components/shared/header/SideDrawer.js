import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './SideDrawer.module.scss';

import LoginButton from '../../buttons/LoginButton';
import LogoutButton from '../../buttons/LogoutButton';
import RegisterButton from '../../buttons/RegisterButton';

class SideDrawer extends Component {
  renderAuthLinks() {
    switch (this.props.user._id) {
      case null:
        return <div />;
      case false:
        return (
          <div>
            <li>
              <LoginButton />
            </li>
            <li>
              <RegisterButton />
            </li>
          </div>
        );
      default:
        return (
          <li>
            <LogoutButton />
          </li>
        );
    }
  }

  render() {
    const { isVisible } = this.props;
    return (
      <div className={isVisible ? styles['side-drawer-open'] : styles['side-drawer']}>
        <ul>{this.renderAuthLinks()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(SideDrawer);
