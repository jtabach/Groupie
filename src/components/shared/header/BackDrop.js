import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './BackDrop.scss';

const BackDrop = props => (
  <div styleName="backdrop" onClick={props.handleBackdropClick} />
);

export default CSSModules(BackDrop, styles);
