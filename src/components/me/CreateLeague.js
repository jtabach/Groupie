import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './CreateLeague.module.scss';

import CreateLeagueForm from '../forms/CreateLeagueForm';
import Card from '../common/Card';

import { createLeague } from '../../actions/leagueActions';

class CreateLeague extends Component {
  handleSubmit = values => {
    this.props.createLeague(values);
  };

  render() {
    return (
      <Card>
        <div className={styles["header"]}>
          <h2 className={styles["test"]}>Create Your League</h2>
        </div>
        <div className={styles["card-content"]}>
          <CreateLeagueForm onSubmit={this.handleSubmit} />
        </div>
      </Card>
    );
  }
}

export default connect(null, { createLeague })(CreateLeague);
