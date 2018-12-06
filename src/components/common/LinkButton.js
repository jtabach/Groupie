import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

class LinkButton extends Component {
  static propTypes = {
    destination: PropTypes.oneOf(['internal', 'external']),
    path: PropTypes.string.isRequired,
    isNewTab: PropTypes.bool,
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
    label: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    destination: 'internal',
    isNewTab: false,
    variant: 'primary',
    size: 'large',
    label: '',
    children: null
  };

  render() {
    const {
      destination,
      path,
      isNewTab,
      variant,
      size,
      label,
      children
    } = this.props;

    if (destination === 'external') {
      return (
        <a
          href={path}
          className={`${styles[variant]} ${styles[size]}`}
          target={isNewTab ? '_blank' : null}
        >
          {label || children}
        </a>
      );
    } else {
      return (
        <Link to={path} className={`${styles[variant]} ${styles[size]}`}>
          {label || children}
        </Link>
      );
    }
  }
}

export default LinkButton;
