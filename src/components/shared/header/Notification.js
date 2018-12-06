import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

class Notification extends Component {
  static propTypes = {
    notification: PropTypes.object.isRequired,
    onHandleClick: PropTypes.func.isRequired
  };

  renderNotification(notification) {
    switch (notification.verb) {
      case 'post':
        return (
          <div className={styles["notification-buffer"]}>
            <p>
              <strong>{notification.actor.email}</strong> posted in{' '}
              <strong>{notification.league.name}</strong> aksdhf oaioie asydg
              fiua
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
