import React, { Component } from 'react';
import styles from './SettingsCard.module.scss';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import Card from '../../common/Card';
import ButtonTest from '../../common/ButtonTest';

import { changeNotificationSettings } from '../../../actions/notificationActions';

const settingsData = [
  {
    key: 'postOnTimeline',
    prompt: 'Someone posts on a league timeline'
  },
  {
    key: 'commentOnPost',
    prompt: 'Someone comments on my post '
  },
  {
    key: 'likeOnPost',
    prompt: 'Someone likes my post'
  }
];

class SettingsCard extends Component {
  state = {
    notificationSettings: this.props.user.notificationSettings
  };

  handleChange(bool, key) {
    this.setState({
      notificationSettings: {
        ...this.state.notificationSettings,
        [key]: bool
      }
    });
  }

  handleClick() {
    this.props.changeNotificationSettings(this.state.notificationSettings);
  }

  renderSettingsList() {
    return settingsData.map((setting) => {
      return (
        <li className={styles['settings-card__item']} key={Math.random()}>
          <label htmlFor={setting.key}>
            <span>{setting.prompt}</span>
            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              height={24}
              width={48}
              onChange={(bool) => this.handleChange(bool, setting.key)}
              checked={this.state.notificationSettings[setting.key]}
              id={setting.key}
            />
          </label>
        </li>
      );
    });
  }

  render() {
    const {
      loading,
      errorMessage,
      successMessage
    } = this.props.formLoading.notificationSettings;

    return (
      <Card>
        <div className={styles['settings-card']}>
          <h6 className={styles['settings-card__header']}>
            Manage notification settings
          </h6>
          <h5>Notify me when:</h5>
          <ul className={styles['settings-card__list']}>
            {this.renderSettingsList()}
          </ul>
          <div className={styles['message-wrapper']}>
            <p className={styles['error-message']}>{errorMessage}</p>
            <p className={styles['success-message']}>{successMessage}</p>
          </div>
          <div className={styles['button-wrapper']}>
            <ButtonTest
              label={'Save'}
              onClick={() => this.handleClick()}
              variant={'primary'}
              type={'button'}
              size={'large'}
              isLoading={loading}
            />
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps({ user, formLoading }) {
  return { user, formLoading };
}

export default connect(
  mapStateToProps,
  { changeNotificationSettings }
)(SettingsCard);
