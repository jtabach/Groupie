import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import styles from './PostActionsList.scss';

class PostActions extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };

  handleClickOutside = evt => {
    this.props.onHandleClickOutside();
  };

  render() {
    return (
      <div styleName="actions">
        <ul styleName="actions__list">
          {this.props.children.map(child => {
            return (
              <li styleName="actions__list--item" key={Math.random()}>
                {child}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default onClickOutside(CSSModules(PostActions, styles));
