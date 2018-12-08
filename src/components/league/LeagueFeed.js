import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlayerNews } from '../../actions/newsActions';

class LeagueFeed extends Component {
  componentDidMount() {
    this.props.fetchPlayerNews();
  }

  render() {
    return <div>This is the LeagueFeed</div>;
  }
}

export default connect(null, { fetchPlayerNews })(LeagueFeed);
