import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

class ModalCard extends Component {
  static propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['light', 'dark']),
    onHandleClick: PropTypes.func
  };

  static defaultProps = {
    children: null,
    variant: 'light',
    onHandleClick: () => {}
  };

  render() {
    const { variant, onHandleClick } = this.props;

    return (
      <div
        className={styles[`modal-card-${variant}`]}
        onClick={onHandleClick}>
        {this.props.children}
      </div>
    );
  }
}

export default ModalCard;
