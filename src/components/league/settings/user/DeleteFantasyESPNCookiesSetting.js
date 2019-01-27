import React, { Component } from "react";
import { connect } from "react-redux";

import ButtonTest from "../../../common/ButtonTest";

import { deleteFantasyEspnCookies } from "../../../../actions/fantasyActions";

class DeleteFantasyESPNCookiesSetting extends Component {
  render() {
    const { team } = this.props;

    return (
      <div>
        {team.espnCookieString ? (
          <div>
            <p>
              Deleting the ESPN cookies will not let you view your fantasy team
              roster
            </p>
            <ButtonTest
              type="button"
              variant="red"
              label="Delete"
              onClick={() => this.props.deleteFantasyEspnCookies(team._id)}
            />
          </div>
        ) : (
          <p>Espn fantasy cookies have not yet been set</p>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteFantasyEspnCookies }
)(DeleteFantasyESPNCookiesSetting);
