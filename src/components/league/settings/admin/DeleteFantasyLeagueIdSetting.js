import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteFantasyLeagueId } from '../../../../actions/fantasyActions';

class DeleteFantasyLeagueIdSetting extends Component {
  render() {
    const { league } = this.props;

    return (
      <div>
        {
          league.fantasyLeagueId
          ?
          <div>
            <p>Deleting the league Id will not allow any members to view any fantasy data</p>
            <button onClick={() => this.props.deleteFantasyLeagueId(league._id)}>Delete</button>
          </div>
          :
          <p>Fantasy League Id has not yet been set</p>
        }
      </div>
    );
  }
}

export default connect(null, { deleteFantasyLeagueId })(DeleteFantasyLeagueIdSetting);