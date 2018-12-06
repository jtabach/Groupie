import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import styles from './ActionList.module.scss';

class ActionList extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    buttonType: PropTypes.string.isRequired,
    listType: PropTypes.string
  };

  static defaultProps = {
    listType: 'actions'
  };

  handleClickOutside = evt => {
    this.props.onHandleClickOutside(this.props.buttonType);
  };

  render() {
    const { children, listType } = this.props;
    const childrenArray = [].concat(children);

    return (
      <div className={styles["listType"]}>
        <ul className={styles[`${listType}__list`]}>
          {childrenArray.map(child => {
            return (
              <li className={styles[`${listType}__list--item`]} key={Math.random()}>
                {child}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default onClickOutside(ActionList);
