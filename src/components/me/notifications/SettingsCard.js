import React, { Component } from 'react';
import styles from './SettingsCard.module.scss';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import Card from '../../common/Card';

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

  renderSettingsList() {
    return settingsData.map((setting) => {
      return (
        <li className={styles['settings-card__item']} key={Math.random()}>
          <label htmlFor={setting.key}>
            <span>{setting.prompt}</span>
            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
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
    return (
      <Card>
        <div className={styles['settings-card']}>
          <h6 style={{ marginBottom: '16px' }}>Manage notification settings</h6>
          <h5>Notify me when:</h5>
          <ul className={styles['settings-card__list']}>
            {this.renderSettingsList()}
          </ul>
        </div>
      </Card>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(SettingsCard);