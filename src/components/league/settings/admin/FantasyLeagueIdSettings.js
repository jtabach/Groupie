import React, { Component } from 'react';

import FantasyLeagueIdPrompt from '../../../common/FantasyLeagueIdPrompt';
import ButtonTest from '../../../common/ButtonTest';

class FantasyLeagueIdSettings extends Component {
  toggleForm() {

  }

  render() {
    const { league } = this.props;
    return (
      <div>
        <div>
          <p>ESPN Fantasy League Id</p>
          <ButtonTest
            type={'button'}
            variant={'primary'}
            label={'Add'}/>
        </div>
        <FantasyLeagueIdPrompt
          league={league}
          promptText={'Add ESPN Fantasy League Id'}
        />
      </div>
    )
  }
}

export default FantasyLeagueIdSettings;