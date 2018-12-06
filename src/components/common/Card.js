import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Card.scss';

class Card extends Component {
  static propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['light', 'dark'])
  };

  static defaultProps = {
    children: null,
    variant: 'light'
  };

  render() {
    const { variant } = this.props;

    return <div styleName={`card-${variant}`}>{this.props.children}</div>;
  }
}

export default CSSModules(Card, styles);
