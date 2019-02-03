import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ActionList from '../../common/ActionList';
import LogoutButton from '../../buttons/LogoutButton';

class SettingsActionList extends Component {
  static propTypes = {
    onHandleClickOutside: PropTypes.func.isRequired,
    buttonType: PropTypes.string.isRequired
  };

  render() {
    const { onHandleClickOutside, buttonType } = this.props;

    return (
      <ActionList
        onHandleClickOutside={onHandleClickOutside}
        buttonType={buttonType}
      >
        <Link to='/me/notification-settings'>Notification Settings</Link>
        <LogoutButton />
      </ActionList>
    );
  }
}

export default SettingsActionList;
