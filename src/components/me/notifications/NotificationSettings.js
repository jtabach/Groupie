import React, { Component } from 'react';
import styles from './NotificationSettings.module.scss';

import SettingsCard from './SettingsCard';

class NotificationSettings extends Component {
  render() {
    return (
      <div className={styles['notification-settings']}>
        <h3 className={styles['notification-settings__header']}>
          Notification Settings
        </h3>
        <SettingsCard />
      </div>
    );
  }
}

export default NotificationSettings;
