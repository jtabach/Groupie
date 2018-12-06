import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './DrawerToggleButton.scss';

const DrawerToggleButton = props => (
  <button styleName="toggle-button" onClick={props.click}>
    <div styleName="toggle-button__line" />
    <div styleName="toggle-button__line" />
    <div styleName="toggle-button__line" />
  </button>
);

export default CSSModules(DrawerToggleButton, styles);
