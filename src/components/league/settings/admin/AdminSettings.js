import React, { Component } from "react";
import styles from "./AdminSettings.module.scss";

import {
  AddFantasyLeagueIdSetting,
  EditFantasyLeagueIdSetting,
  DeleteFantasyLeagueIdSetting,
  RemoveTeamFromLeagueSetting
} from "./index";

import Accordion from "../../../common/Accordion";

class AdminSettings extends Component {
  render() {
    const { league } = this.props;

    let settingsList = [
      {
        key: "addFantasyLeagueIdSetting",
        label: "Add ESPN Fantasy League Id",
        component: <AddFantasyLeagueIdSetting league={league} />,
        isDisabled: league.fantasyLeagueId ? true : false
      },
      {
        key: "changeFantasyLeagueIdSetting",
        label: "Change ESPN Fantasy League Id",
        component: <EditFantasyLeagueIdSetting league={league} />,
        isDisabled: !league.fantasyLeagueId ? true : false
      },
      {
        key: "deleteFantasyLeagueIdSetting",
        label: "Delete ESPN Fantasy League Id",
        component: <DeleteFantasyLeagueIdSetting league={league} />,
        isDisabled: !league.fantasyLeagueId ? true : false
      },
      {
        key: "removeTeamFromLeagueSetting",
        label: "Remove Team From League",
        component: <RemoveTeamFromLeagueSetting league={league} />,
        isDisabled: true
      }
    ];

    return (
      <div className={styles["settings-list"]}>
        <h3>Admin Settings</h3>
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

export default AdminSettings;
