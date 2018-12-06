import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import styles from './CommentItem.module.scss';

class CommentItem extends Component {
  static propTypes = {
    comment: CustomPropTypes.comment.isRequired
  };

  render() {
    const { comment } = this.props;

    return (
      <li className={styles["comment-item"]}>
        <p>
          <strong className={styles["team-name"]}>{comment.team.name}</strong>{' '}
          {comment.text}
        </p>
      </li>
    );
  }
}

export default CommentItem;
