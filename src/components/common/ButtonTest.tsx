import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Button.module.scss';

import ButtonLoading from './ButtonLoading';

interface Props {
  type: 'button'|'submit';
  variant: 'primary'|'secondary'|'secondary-inverse'|'outline'|
    'primary-inverse'|'green'|'green-inverse'|'red'|'red-inverse';
  size: 'large'|'small';
  onClick: any;
  label: string;
  children: any;
  isLoading: boolean;
}

class ButtonTest extends Component<Props> {
  public static defaultProps: {
    type: 'button',
    variant: 'primary',
    size: 'large',
    label: '',
    children: null,
  };

  public render() {
    const { type, variant, size, onClick, label, children, isLoading } = this.props;

    return (
      <button
        type={type}
        className={`${styles[variant]} ${styles[size]}`}
        onClick={type === 'submit' ? () => _.noop() : onClick}
      >
      {
        isLoading
        ? <ButtonLoading />
        : label || children
      }
      </button>
    );
  }
}

export default ButtonTest;
