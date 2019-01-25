import React, { Component } from 'react';
import styles from './NewsCard.module.scss';

import ModalCard from '../../common/ModalCard';

import UIHelper from '../../../helpers/uiHelper'

class NewsCard extends Component {


  render() {
    const { content, onHandleClick } = this.props;
    console.log(content);

    return (
      <li className={styles["news-card"]}>
        <ModalCard onHandleClick={() => onHandleClick(content)}>
          <div className={styles["news-card__item"]}>
            <h6 className={styles["news-card__name"]}>{content.firstName} {content.lastName}</h6>
            <h6 className={styles["news-card__position"]}>{content.teamAbbr} - {content.position}</h6>
            <h5 className={styles["news-card__headline"]}>{content.headline}</h5>
            <p className={styles["news-card__body"]}>{UIHelper.replaceHTMLCharRef(content.body)}</p>
          </div>
        </ModalCard>
      </li>
    )
  }
}

export default NewsCard;