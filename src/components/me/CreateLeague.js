import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './CreateLeague.module.scss';

import CreateLeagueForm from '../forms/CreateLeagueForm';
import Card from 'components/common/Card';

import { createLeague } from '../../actions/leagueActions';

class CreateLeague extends Component {
  handleSubmit = values => {
    this.props.createLeague(values);
  };

  render() {
    return (
      <Card>
        <div styleName="header">
          <h2 styleName="test">Create Your League</h2>
        </div>
        <div styleName="card-content">
          <CreateLeagueForm onSubmit={this.handleSubmit} />
        </div>
      </Card>
    );
  }
}

export default connect(null, { createLeague })(CreateLeague, styles);
