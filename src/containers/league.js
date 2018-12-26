import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { fetchLeague, clearLeague } from '../actions/leagueActions';
import { fetchTeam, clearTeam } from '../actions/teamActions';
import { fetchUser } from '../actions/authActions';
import { fetchNotifications } from '../actions/notificationActions';
import { fetchPlayerNews } from '../actions/newsActions';
import { clearFantasyData } from '../actions/fantasyActions';

import LeagueComponent from '../components/league';

class League extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    fetchLeague: PropTypes.func.isRequired,
    fetchTeam: PropTypes.func.isRequired,
    clearLeague: PropTypes.func.isRequired,
    clearTeam: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { leagueId } = this.props.match.params;

    this.props.fetchUser();
    this.props.fetchLeague(leagueId);
    this.props.fetchTeam(leagueId);
    this.props.fetchPlayerNews();

    setInterval(() => {
      this.props.fetchNotifications();
      console.log('fetching notifications');
    }, 30000);
  }

  componentWillUnmount() {
    // clears redux store for team and league data
    // so no flash in data when switching leagues
    this.props.clearLeague();
    this.props.clearTeam();
    this.props.clearFantasyData();
  }

  render() {
    const { match, league, user, team } = this.props;

    if (user._id === false) {
      return <Redirect to="/" />;
    } else if (league._id && user._id && team._id) {
      return (
        <LeagueComponent
          league={league}
          user={user}
          team={team}
          match={match}
        />
      );
    } else {
      return (
        <div>loading...</div>
      );
    }
  }
}

function mapStateToProps({ league, user, team }) {
  return { league, user, team };
}

export default connect(mapStateToProps, {
  fetchLeague,
  fetchUser,
  fetchTeam,
  clearLeague,
  clearTeam,
  clearFantasyData,
  fetchNotifications,
  fetchPlayerNews
})(League);
