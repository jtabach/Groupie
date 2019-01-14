import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

class Notification extends Component {
  static propTypes = {
    notification: PropTypes.object.isRequired,
    onHandleClick: PropTypes.func.isRequired
  };

  renderNotification(notification) {
    console.log(notification);
    switch (notification.verb) {
      case 'post':
        return (
          <div className={styles["notification-buffer"]}>
            <p>
              <strong>{notification.actor.firstName} {notification.actor.lastName}</strong> posted in{' '}
              <strong>{notification.league.name}</strong>
            </p>
          </div>
        );
      case 'like':
        return (
          <div className={styles["notification-buffer"]}>
            <p>
              <strong>{notification.actor.firstName} {notification.actor.lastName}</strong>{' '}
              liked your post in{' '}
              <strong>{notification.league.name}</strong>
            </p>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const { notification, onHandleClick } = this.props;
    const hasViewed = notification.hasViewed ? '' : 'highlight';

    return (
      <div
        onClick={() => onHandleClick(notification)}
        className={`${styles["notification"]} ${styles[hasViewed]}`}
      >
        {this.renderNotification(notification)}
      </div>
    );
  }
}

export default Notification;
