import React, { Component } from 'react';
import CustomPropTypes from '../../../prop-types';
import styles from './CommentItem.module.scss';

import uiHelper from '../../../helpers/uiHelper';

class CommentItem extends Component {
  static propTypes = {
    comment: CustomPropTypes.comment.isRequired
  };

  render() {
    const { comment } = this.props;

    return (
      <li className={styles["comment-item"]}>
        <p className={styles["comment-text"]}>
          <strong className={styles["team-name"]}>
            {comment.team.user.firstName} {comment.team.user.lastName}
          </strong>{' '}
          {comment.text}
        </p>
        <p className={styles["comment-date"]}>{uiHelper.formatCommentDate(comment.date)}</p>
      </li>
    );
  }
}

export default CommentItem;
