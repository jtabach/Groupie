import React, { Component } from 'react';
import { connect } from 'react-redux';

import MemberList from './MemberList';

class Members extends Component {
  render() {
    const { league } = this.props;

    return (
      <div>
        <h2 style={{ marginBottom: '12px' }}>League Members</h2>
        <MemberList league={league} />
      </div>
    );
  }
}

function mapStateToProps({ league }) {
  return { league };
}

export default connect(mapStateToProps)(Members);
