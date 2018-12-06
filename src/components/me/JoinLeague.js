import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './JoinLeague.module.scss';

import JoinLeagueForm from '../forms/JoinLeagueForm';
import Card from '..//common/Card';

import { joinLeague } from '../../actions/leagueActions';

class JoinLeague extends Component {
  handleSubmit = values => {
    this.props.joinLeague(values);
  };

  render() {
    return (
      <Card>
        <div className={styles["header"]}>
          <h2 className={styles["test"]}>Join a League</h2>
        </div>
        <div className={styles["card-content"]}>
          <JoinLeagueForm onSubmit={this.handleSubmit} />
        </div>
      </Card>
    );
  }
}

export default connect(null, { joinLeague })(JoinLeague);
