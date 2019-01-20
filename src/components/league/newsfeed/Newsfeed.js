import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Newsfeed.module.scss';

import Card from '../../common/Card';
import ModalCard from '../../common/ModalCard';
import NewsCard from './NewsCard';

class Newsfeed extends Component {
  renderPlayerNews() {
    const { news } = this.props;
    if (!news.length) {
      return null
    }
    return news.map(item => {
      return (
        <li key={item.id} className={styles["newsfeed__list--item"]}>
          <ModalCard>
            <div className={styles["newsfeed__list--card"]}>
              <h6 className={styles["newsfeed__list--name"]}>{item.teamAbbr} - {item.position} - {item.firstName} {item.lastName}</h6>
              <h5 className={styles["newsfeed__list--headline"]}>{item.headline}</h5>
              <p className={styles["newsfeed__list--body"]}>{this._replaceHTMLCharRef(item.body)}</p>
            </div>
          </ModalCard>
        </li>
      );
    });
  }

  _replaceHTMLCharRef(str) {
    return str.replace(/&apos;/g, '\'');
  }

  render() {
    return (
      <div className={styles["newsfeed"]}>
        <h5 className={styles["newsfeed__header"]}>Player News</h5>
        <ul className={styles["newsfeed__list"]}>{this.renderPlayerNews()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps)(Newsfeed);
