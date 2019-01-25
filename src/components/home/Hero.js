import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import styles from './Hero.module.scss';

import ButtonTest from '../common/ButtonTest';
import LinkButton from '../common/LinkButton';

const SCROLL_ANIMATION_DURATION = 500;

class Hero extends Component {
  render() {
    return (
      <div className={styles['hero']}>
        <div className="container">
          <div className="row">
            <h1 className={`${styles['hero__title']} col-12`}>
              Welcome to Group Fantasy Football League
            </h1>
            <p className={`${styles['hero__description']} col-6`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur sit, voluptate minima tempora id labore quisquam unde
              minus nisi possimus.
            </p>
            <div className={`${styles['hero__buttons']} col-12`}>
              <div className={styles['hero__buttons--wrapper']}>
                <LinkButton
                  path="/register"
                  variant="green"
                  size="small"
                  label="create account"
                />
              </div>
              <div className={styles['hero__buttons--wrapper']}>
                <Scrollchor
                  to="#about"
                  animate={{ duration: SCROLL_ANIMATION_DURATION }}
                  disableHistory={true}
                >
                  <ButtonTest
                    type="button"
                    variant="green-inverse"
                    size="small"
                    label="learn more"
                    onClick={() => {}}
                  />
                </Scrollchor>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
