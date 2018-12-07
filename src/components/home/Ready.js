import React from 'react';
import { FaRegCommentAlt, FaFootballBall, FaRegNewspaper, FaConnectdevelop } from 'react-icons/fa';
import styles from './Ready.module.scss';

import ButtonTest from '../common/ButtonTest';

const Ready = () => {
  return (
    <div className={styles["ready"]}>
      <div className="container">
        <div className="row">
          <div className={`${styles["ready__content"]} col-12`}>
            <div className={styles["ready__content--image"]}>
              <FaConnectdevelop />
            </div>
            <div className={styles["ready__content--description"]}>
              <h4>Lorem ipsum dolor sit amet, consectetur</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odit, eum magnam porro molestias laboriosam sapiente accusantium animi ut nihil doloribus minus aspernatur minima, tempora consectetur unde.</p>
              <div className={styles["ready__cta"]}>
                <h5 className={styles["ready__cta--copy"]}>
                  Let's get started!
                </h5>
                <div className={styles["ready__cta--button"]}>
                  <ButtonTest
                    type="button"
                    variant="primary"
                    size="small"
                    label="create account"
                    onClick={() => console.log('create')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ready;