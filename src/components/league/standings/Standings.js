import React, { Component } from 'react';
import { connect } from 'react-redux';

import DivisionCard from './DivisionCard';

import { fetchFantasyStandings } from '../../../actions/fantasyActions';

class Standings extends Component {
  componentDidMount() {
    this.props.fetchFantasyStandings('1943495');
  }

  renderDivisions() {
    const { standings } = this.props.fantasy;
    if (!standings) {
      return null;
    }

    return Object.keys(standings).map(division => {
      return (<DivisionCard key={Math.random()} division={standings[division]} />)
    })
  }

  render() {
    console.log(this.props.fantasy);
    return (
      <div>
        <h2>Standings</h2>
        <ul>{this.renderDivisions()}</ul>
      </div>
    )
  }
}

function mapStateToProps({ fantasy }) {
  return { fantasy };
}

export default connect(mapStateToProps, { fetchFantasyStandings })(Standings);