import React, { Component } from 'react';
import CustomPropTypes from '../../../prop-types';
import moment from 'moment';
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
        <p>{moment(comment.date, "YYYYMMDD").fromNow()}</p>
      </li>
    );
  }
}

export default CommentItem;
