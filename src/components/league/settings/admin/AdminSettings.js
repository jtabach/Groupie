import React, { Component } from 'react';

import AddFantasyLeagueIdSetting from './AddFantasyLeagueIdSetting';
import EditFantasyLeagueIdSetting from './EditFantasyLeagueIdSetting';
import DeleteFantasyLeagueIdSetting from './DeleteFantasyLeagueIdSetting';
import Accordion from '../../../common/Accordion';

class AdminSettings extends Component {
  render() {
    const { league } = this.props;
    return (
      <div>
        <h3>Admin Settings</h3>
        <Accordion>
          <div label='Add ESPN Fantasy League Id'>
            <AddFantasyLeagueIdSetting league={league} />
          </div>
          <div label='Change ESPN Fantasy League Id'>
            <EditFantasyLeagueIdSetting league={league} />
          </div>
          <div label='Delete ESPN Fantasy League Id'>
            <DeleteFantasyLeagueIdSetting league={league} />
          </div>
        </Accordion>
      </div>
    )
  }
}

export default AdminSettings;