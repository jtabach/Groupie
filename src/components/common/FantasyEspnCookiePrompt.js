import React, { Component } from "react";
import { connect } from "react-redux";

import FantasyEspnCookieForm from "../forms/FantasyEspnCookieForm";

import { setFantasyEspnCookies } from "../../actions/fantasyActions";

class FantasyEspnCookiePrompt extends Component {
  handleSubmit = values => {
    this.props.setFantasyEspnCookies(values, this.props.team._id);
  };

  render() {
    const { promptText, league, team } = this.props;
    const {
      errorMessage,
      successMessage,
      loading
    } = this.props.formLoading.fantasyLeagueId;

    return (
      <div>
        <h4>An ESPN Auth Cookies have not been entered yet</h4>
        <FantasyEspnCookieForm
          onSubmit={this.handleSubmit}
          errorMessage={errorMessage}
          successMessage={successMessage}
          isLoading={loading}
        />
        <p>Why do I need to enter this?</p>
      </div>
    );
  }
}

function mapStateToProps({ formLoading, league }) {
  return { formLoading, league };
}

export default connect(
  mapStateToProps,
  { setFantasyEspnCookies }
)(FantasyEspnCookiePrompt);
