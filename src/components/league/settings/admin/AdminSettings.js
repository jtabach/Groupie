import React, { Component } from 'react';

import FantasyLeagueIdPrompt from '../../../common/FantasyLeagueIdPrompt';

class AdminSettings extends Component {
  render() {
    const { league } = this.props;
    return (
      <div>
        <h3>Admin Settings</h3>
        <ul>
          <li>
            <FantasyLeagueIdPrompt
              league={league}
              promptText={'Add ESPN Fantasy League Id'}
            />
          </li>
        </ul>
      </div>
    )
  }
}

export default AdminSettings;