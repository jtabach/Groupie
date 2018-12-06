import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderButtonBadge.module.scss';

class HeaderButtonBadge extends Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired
  };

  renderNotificationCount() {
    const { notifications } = this.props;

    const notificationCount = notifications.reduce((total, notification) => {
      return notification.hasDismissed ? total : total + 1;
    }, 0);

    if (notificationCount < 1) {
      return null;
    } else if (notificationCount < 10) {
      return (
        <div className={styles["badge"]}>
          <div className={styles["count"]}>{notificationCount}</div>
        </div>
      );
    } else {
      return (
        <div className={styles["badge"]}>
          <div className={styles["count"]}>!</div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderNotificationCount()}</div>;
  }
}

export default HeaderButtonBadge;
