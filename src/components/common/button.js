import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import _ from 'lodash';

class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'secondary-inverse',
      'outline',
      'primary-inverse',
      'green',
      'green-inverse',
      'red',
      'red-inverse'
    ]),
    size: PropTypes.oneOf(['large', 'small']),
    onClick: PropTypes.func,
    label: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps: {
    type: 'button',
    variant: 'primary',
    size: 'large',
    label: '',
    children: null
  };

  render() {
    const { type, variant, size, onClick, label, children } = this.props;
    console.log(`${styles[variant]} ${styles[size]}`);

    return (
      <button
        type={type}
        className={`${styles[variant]} ${styles[size]}`}
        onClick={type === 'submit' ? () => _.noop() : onClick}
      >
        {label || children}
      </button>
    );
  }
}

export default Button;
