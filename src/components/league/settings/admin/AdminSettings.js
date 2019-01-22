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
          <div label='Alligator Mississippiensis'>
            <p>
              <strong>Common Name:</strong> American Alligator
            </p>
            <p>
              <strong>Distribution:</strong> Texas to North Carolina, US
            </p>
            <p>
              <strong>Endangered Status:</strong> Currently Not Endangered
            </p>
          </div>
          <div label='Alligator Sinensis'>
            <p>
              <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
              <strong>Distribution:</strong> Eastern China
            </p>
            <p>
              <strong>Endangered Status:</strong> Critically Endangered
            </p>
          </div>
        </Accordion>
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