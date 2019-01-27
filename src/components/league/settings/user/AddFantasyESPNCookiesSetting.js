import React, { Component } from "react";

import FantasyEspnCookiePrompt from "../../../common/FantasyEspnCookiePrompt";

class AddFantasyESPNCookiesSetting extends Component {
  render() {
    const { league, team } = this.props;

    return (
      <div>
        {!team.espnCookieString ? (
          <FantasyEspnCookiePrompt
            league={league}
            team={team}
            promptText={"Add ESPN Fantasy Cookies"}
          />
        ) : (
          <p>Fantasy League Id has not yet been set</p>
        )}
      </div>
    );
  }
}

export default AddFantasyESPNCookiesSetting;
