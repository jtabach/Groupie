import React, { Component } from 'react';

import FantasyLeagueIdPrompt from '../../../common/FantasyLeagueIdPrompt';

class AddFantasyLeagueIdSetting extends Component {
  render() {
    const { league } = this.props;

    return (
      <div>
        {league.fantasyLeagueId ? (
          <p>The fantasy league Id has already been set</p>
        ) : (
          <FantasyLeagueIdPrompt
            league={league}
            promptText={'Add ESPN Fantasy League Id'}
          />
        )}
      </div>
    );
  }
}

export default AddFantasyLeagueIdSetting;
