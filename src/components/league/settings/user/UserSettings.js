import React, { Component } from 'react';
import styles from './UserSettings.module.scss';

import Accordion from '../../../common/Accordion';
import AddFantasyESPNCookiesSetting from './AddFantasyESPNCookiesSetting';
import EditFantasyESPNCookiesSetting from './EditFantasyESPNCookiesSetting';
import DeleteFantasyESPNCookiesSetting from './DeleteFantasyESPNCookiesSetting';
import LeaveLeagueSetting from './LeaveLeagueSetting';

class UserSettings extends Component {
  render() {
    const { league, user, team } = this.props;

    const settingsList = [
      {
        label: 'Add ESPN Cookies',
        component: <AddFantasyESPNCookiesSetting league={league} user={user} />,
        isDisabled: team.espnCookieString ? true : false
      },
      {
        label: 'Change ESPN Cookies',
        component: (
          <EditFantasyESPNCookiesSetting league={league} user={user} />
        ),
        isDisabled: !team.espnCookieString ? true : false
      },
      {
        label: 'Delete ESPN Cookies',
        component: (
          <DeleteFantasyESPNCookiesSetting league={league} user={user} />
        ),
        isDisabled: !team.espnCookieString ? true : false
      },
      {
        label: 'Leave This League',
        component: <LeaveLeagueSetting league={league} user={user} />,
        isDisabled: false
      }
    ];

    return (
      <div className={styles['settings-list']}>
        <h3>User Settings</h3>
        <Accordion>
          {settingsList.map((setting, i) => {
            return (
              <div
                label={setting.label}
                isDisabled={setting.isDisabled}
                key={i}
              >
                {setting.component}
              </div>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default UserSettings;
