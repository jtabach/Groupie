import React, { Component } from 'react';

import FantasyLeagueIdPrompt from '../../../common/FantasyLeagueIdPrompt';
import AccordionSection from '../../../common/AccordionSection';

class AdminSettings extends Component {
  render() {
    const { league } = this.props;
    return (
      <div>
        <h3>Admin Settings</h3>
        <AccordionSection
          isOpen={true}
          label={'testing123'}
          onHandleClick={() => { console.log('click')}}
        >
          <div>Test</div>
        </AccordionSection>
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