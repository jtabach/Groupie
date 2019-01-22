import React, { Component } from 'react';

import FantasyLeagueIdPrompt from '../../../common/FantasyLeagueIdPrompt';

class EditFantasyLeagueIdSetting extends Component {
  render() {
    const { league } = this.props;

    return (
      <div>
        {
          league.fantasyLeagueId
          ?
          <FantasyLeagueIdPrompt
            league={league}
            promptText={'Change ESPN Fantasy League Id'}
          />
          :
          <p>Fantasy League Id has not yet been set</p>
        }
      </div>
    );
  }
}

export default EditFantasyLeagueIdSetting;