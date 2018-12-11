import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './LeagueFeed.module.scss';

import Card from '../common/Card';

class LeagueFeed extends Component {
  renderPlayerNews() {
    const { news } = this.props;
    if (!news.length) {
      return null
    }
    return news.map(item => {
      return (
        <li key={item.id} className={styles["league-feed__list--item"]}>
          <Card>
            <div className={styles["league-feed__list--card"]}>
              <h6 className={styles["league-feed__list--name"]}>{item.teamAbbr} - {item.position} - {item.firstName} {item.lastName}</h6>
              <h5 className={styles["league-feed__list--headline"]}>{item.headline}</h5>
              <p className={styles["league-feed__list--body"]}>{this._replaceHTMLCharRef(item.body)}</p>
            </div>
          </Card>
        </li>
      );
    });
  }

  _replaceHTMLCharRef(str) {
    return str.replace(/&apos;/g, '\'');
  }

  render() {
    return (
      <div className={styles["league-feed"]}>
        <h5 className={styles["league-feed__header"]}>Player News</h5>
        <ul className={styles["league-feed__list"]}>{this.renderPlayerNews()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps)(LeagueFeed);
