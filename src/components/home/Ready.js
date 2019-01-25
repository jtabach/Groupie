import React from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
import styles from './Ready.module.scss';

import LinkButton from '../common/LinkButton';

const Ready = () => {
  return (
    <div className={styles['ready']}>
      <div className="container">
        <div className="row">
          <div className={`${styles['ready__content']} col-12`}>
            <div className={styles['ready__content--image']}>
              <FaConnectdevelop />
            </div>
            <div className={styles['ready__content--description']}>
              <h4>Lorem ipsum dolor sit amet, consectetur</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam odit, eum magnam porro molestias laboriosam sapiente
                accusantium animi ut nihil doloribus minus aspernatur minima,
                tempora consectetur unde.
              </p>
              <div className={styles['ready__cta']}>
                <h5 className={styles['ready__cta--copy']}>
                  Let's get started!
                </h5>
                <div className={styles['ready__cta--button']}>
                  <LinkButton
                    path="/register"
                    variant="primary"
                    size="small"
                    label="create account"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
