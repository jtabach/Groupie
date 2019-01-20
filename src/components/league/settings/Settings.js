import React, { Component } from 'react';
import { connect } from 'react-redux';

import SettingsList from './SettingsList';

class Settings extends Component {
  renderSettingsList() {
    const { league, user } = this.props;

    const isAdmin = league.admin === user._id;

    return <SettingsList isAdmin={isAdmin} league={league} user={user} />
  }

  render() {

    return (
      <div>
        <h2>Settings</h2>
        {this.renderSettingsList()}
      </div>
    )
  }
}

function mapStateToProps({ league, user }) {
  return { league, user };
}

export default connect(mapStateToProps)(Settings);