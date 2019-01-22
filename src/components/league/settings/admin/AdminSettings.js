import React, { Component } from 'react';

import FantasyLeagueIdPrompt from '../../../common/FantasyLeagueIdPrompt';
import AccordionSection from '../../../common/AccordionSection';
import Accordion from '../../../common/Accordion';

class AdminSettings extends Component {
  render() {
    const { league } = this.props;
    return (
      <div>
        <h3>Admin Settings</h3>
        <Accordion>
        <div label='Add ESPN League Id'>
          <FantasyLeagueIdPrompt
            league={league}
            promptText={'Add ESPN Fantasy League Id'}
          />
        </div>
          <div label='Change ESPN League Id'>
            <FantasyLeagueIdPrompt
              league={league}
              promptText={'Change ESPN Fantasy League Id'}
            />
          </div>
          <div label='Delete ESPN League Id'>
            <div>Are you sure?</div>
          </div>
        </Accordion>
      </div>
    )
  }
}

export default AdminSettings;