import React, { Component } from 'react';
import styles from './About.module.scss';

import { FaRegCommentAlt, FaFootballBall, FaRegNewspaper } from 'react-icons/fa';

class About extends Component {
  render() {
    return (
      <div className={styles["about"]}>
        <div className="container">
          <div className="row">
            <h2 className={`${styles["about__title"]} col-12`}>Stay up to date with friends and player news</h2>
            <div className={`${styles["about__item"]} col-4`}>
              <div className={styles["about__item--image"]}>
                <FaRegCommentAlt />
              </div>
              <div className={styles["about__item--description"]}>
                Talk fantasy football
              </div>
            </div>
            <div className={`${styles["about__item"]} col-4`}>
              <div className={styles["about__item--image"]}>
                <FaFootballBall />
              </div>
              <div className={styles["about__item--description"]}>
                Get latest player updates
              </div>
            </div>
            <div className={`${styles["about__item"]} col-4`}>
              <div className={styles["about__item--image"]}>
                <FaRegNewspaper />
              </div>
              <div className={styles["about__item--description"]}>
                Customize your news feed
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;