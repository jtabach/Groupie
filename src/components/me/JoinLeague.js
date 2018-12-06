import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './JoinLeague.scss';

import JoinLeagueForm from '../forms/JoinLeagueForm';
import Card from '../common/Card';

import { joinLeague } from '../../actions/leagueActions';

class JoinLeague extends Component {
  handleSubmit = values => {
    this.props.joinLeague(values);
  };

  render() {
    return (
      <Card>
        <div styleName="header">
          <h2 styleName="test">Join a League</h2>
        </div>
        <div styleName="card-content">
          <JoinLeagueForm onSubmit={this.handleSubmit} />
        </div>
      </Card>
    );
  }
}

export default connect(null, { joinLeague })(CSSModules(JoinLeague, styles));
