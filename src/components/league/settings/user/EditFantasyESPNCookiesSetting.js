import React, { Component } from "react";

import FantasyEspnCookiePrompt from "../../../common/FantasyEspnCookiePrompt";

class EditFantasyESPNCookiesSetting extends Component {
  render() {
    const { league, team } = this.props;

    return (
      <div>
        {league.fantasyLeagueId && team.espnCookieString ? (
          <FantasyEspnCookiePrompt
            league={league}
            team={team}
            promptText={"Change ESPN Fantasy Cookies"}
          />
        ) : (
          <p>Fantasy League Id has not yet been set</p>
        )}
      </div>
    );
  }
}

export default EditFantasyESPNCookiesSetting;
