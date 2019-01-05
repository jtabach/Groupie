import React, { Component } from 'react';
import { connect } from 'react-redux';


class MyTeam extends Component {
  render() {
    console.log(this.props);
    return (
      <div>My Team</div>
    );
  }
}

function mapStateToProps({ team, user, league }) {
  return { team, user, league }
}

export default connect(mapStateToProps)(MyTeam);
