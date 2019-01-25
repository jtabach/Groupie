import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import styles from './PostActionsList.module.scss';

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
      <div className={styles['actions']}>
        <ul className={styles['actions__list']}>
          {this.props.children.map(child => {
            return (
              <li className={styles['actions__list--item']} key={Math.random()}>
                {child}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default onClickOutside(PostActions);
