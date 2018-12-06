import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './HeaderButton.scss';

class HeaderButton extends Component {
  static propTypes = {
    icon: PropTypes.node.isRequired,
    actionList: PropTypes.node,
    onHandleClick: PropTypes.func.isRequired,
    buttonType: PropTypes.string.isRequired,
    badge: PropTypes.node
  };

  render() {
    const { icon, badge, actionList, onHandleClick, buttonType } = this.props;
    return (
      <div styleName="header-button-wrapper">
        <div
          styleName="header-button"
          onClick={() => onHandleClick(buttonType)}
        >
          {icon}
        </div>
        {badge}
        {actionList}
      </div>
    );
  }
}

export default CSSModules(HeaderButton, styles);
