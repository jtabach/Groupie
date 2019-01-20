import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  renderSettingsList() {
    const { league, user } = this.props;

    const isAdmin = league.admin === user._id;

    return <div>List</div>
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