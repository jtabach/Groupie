import React from 'react';
import styles from './BackDrop.module.scss';

const BackDrop = props => (
  <div className={styles['backdrop']} onClick={props.handleBackdropClick} />
);

export default BackDrop;
