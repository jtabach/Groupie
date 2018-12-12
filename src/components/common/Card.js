import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

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

    return <div className={styles[`card-${variant}`]}>{this.props.children}</div>;
  }
}

export default Card;
