import React, { Component } from 'react';

class DeleteFantasyLeagueIdSetting extends Component {
  render() {
    const { league } = this.props;

    return (
      <div>
        {
          league.fantasyLeagueId
          ?
          <p>some action for deleting the fantasy league id</p>
          :
          <p>Fantasy League Id has not yet been set</p>
        }
      </div>
    );
  }
}

export default DeleteFantasyLeagueIdSetting;