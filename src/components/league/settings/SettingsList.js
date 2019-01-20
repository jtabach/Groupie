import React, { Component } from 'react';

import FantasyLeagueIdPrompt from '../../common/FantasyLeagueIdPrompt';

class SettingsList extends Component {
  render() {
    const { isAdmin, league, user } = this.props;

    return (
      <ul>
        <li>
          {
            isAdmin
            ?
            <div>
              <p>Admin Settings</p>
              <FantasyLeagueIdPrompt
                league={league}
                promptText={'Add ESPN Fantasy League Id'}
              />
            </div>
            :
            <div>
              <p>User Settings</p>
            </div>
          }
        </li>
      </ul>
    );
  }
}

export default SettingsList;