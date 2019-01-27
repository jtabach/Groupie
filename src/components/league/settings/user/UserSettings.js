import React, { Component } from "react";
import styles from "./UserSettings.module.scss";

import Accordion from "../../../common/Accordion";
import {
  AddFantasyESPNCookiesSetting,
  EditFantasyESPNCookiesSetting,
  DeleteFantasyESPNCookiesSetting,
  LeaveLeagueSetting
} from "./index";

class UserSettings extends Component {
  render() {
    const { league, user, team } = this.props;

    const settingsList = [
      {
        label: "Add ESPN Cookies",
        component: <AddFantasyESPNCookiesSetting league={league} team={team} />,
        isDisabled: team.espnCookieString ? true : false
      },
      {
        label: "Change ESPN Cookies",
        component: (
          <EditFantasyESPNCookiesSetting league={league} team={team} />
        ),
        isDisabled: !team.espnCookieString ? true : false
      },
      {
        label: "Delete ESPN Cookies",
        component: (
          <DeleteFantasyESPNCookiesSetting league={league} team={team} />
        ),
        isDisabled: !team.espnCookieString ? true : false
      },
      {
        label: "Leave This League",
        component: <LeaveLeagueSetting league={league} user={user} />,
        isDisabled: false
      }
    ];

    return (
      <div className={styles["settings-list"]}>
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
