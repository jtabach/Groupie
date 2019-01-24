import React, { Component } from 'react';
import { connect } from 'react-redux';

import FantasyLeagueIdForm from '../forms/FantasyLeagueIdForm';

import { setFantasyLeagueId } from '../../actions/fantasyActions';

class FantasyLeagueIdPrompt extends Component {
  handleSubmit = values => {
    this.props.setFantasyLeagueId(values, this.props.league._id);
  };

  render() {
    const { promptText, league } = this.props;
    const { errorMessage, successMessage, loading } = this.props.formLoading.fantasyLeagueId;

    return (
      <div>
        <h4>{promptText}</h4>
        <FantasyLeagueIdForm
          onSubmit={this.handleSubmit}
          errorMessage={errorMessage}
          successMessage={successMessage}
          isLoading={loading}
          currentFantasyLeagueId={league.fantasyLeagueId}
        />
      </div>
    );
  }
}

function mapStateToProps({ formLoading, league }) {
  return { formLoading, league };
}

export default connect(mapStateToProps, { setFantasyLeagueId })(FantasyLeagueIdPrompt);
