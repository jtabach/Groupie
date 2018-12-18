import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFantasyStandings } from '../../actions/fantasyActions';

class Standings extends Component {
  componentDidMount() {
    this.props.fetchFantasyStandings('643894');
  }

  render() {
    return <div>This is the Standings</div>;
  }
}

export default connect(null, { fetchFantasyStandings })(Standings);