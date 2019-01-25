import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonTest from '../../../common/ButtonTest';

import { deleteFantasyLeagueId } from '../../../../actions/fantasyActions';

class DeleteFantasyLeagueIdSetting extends Component {
  render() {
    const { league } = this.props;

    return (
      <div>
        {league.fantasyLeagueId ? (
          <div>
            <p>
              Deleting the league Id will not allow any members to view any
              fantasy data
            </p>
            <ButtonTest
              type="button"
              variant="red"
              label="Delete"
              onClick={() => this.props.deleteFantasyLeagueId(league._id)}
            />
          </div>
        ) : (
          <p>Fantasy League Id has not yet been set</p>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteFantasyLeagueId }
)(DeleteFantasyLeagueIdSetting);
