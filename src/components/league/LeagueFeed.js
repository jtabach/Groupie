import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeagueFeed extends Component {
  renderPlayerNews() {
    const { news } = this.props;
    if (!news.length) {
      return null
    }
    return news.map(item => {
      return (
        <li key={item.id}>
          <div>
            <h6>{item.firstName} {item.lastName}</h6>
            <p>{item.headline}</p>
            <p>{this._replaceHTMLCharRef(item.body)}</p>
          </div>
        </li>
      );
    });
  }

  _replaceHTMLCharRef(str) {
    return str.replace(/&apos;/g, '\'');
  }

  render() {
    return (
      <div>
        <h5>Player News</h5>
        <ul>{this.renderPlayerNews()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps)(LeagueFeed);
