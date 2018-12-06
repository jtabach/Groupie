import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Button.scss';
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

    return (
      <button
        type={type}
        styleName={variant + ' ' + size}
        onClick={type == 'submit' ? () => _.noop() : onClick}
      >
        {label || children}
      </button>
    );
  }
}

export default CSSModules(Button, styles, { allowMultiple: true });
