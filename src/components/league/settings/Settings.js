import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdminSettings from './admin/AdminSettings';
import UserSettings from './user/UserSettings';

class Settings extends Component {
  renderSettingsList() {
    const { league, user, team } = this.props;

    const isAdmin = league.admin === user._id;

    return (
      <div>
        {
          isAdmin
          ?
          <AdminSettings league={league}/>
          :
          null
        }
        <UserSettings league={league} user={user} team={team} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2 style={{ marginBottom: '12px' }}>Settings</h2>
        {this.renderSettingsList()}
      </div>
    )
  }
}

function mapStateToProps({ league, user, team }) {
  return { league, user, team };
}

export default connect(mapStateToProps)(Settings);