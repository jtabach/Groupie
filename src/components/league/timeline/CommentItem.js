import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import styles from './CommentItem.scss';

class CommentItem extends Component {
  static propTypes = {
    comment: CustomPropTypes.comment.isRequired
  };

  render() {
    const { comment } = this.props;

    return (
      <li styleName="comment-item">
        <p>
          <strong styleName="team-name">{comment.team.name}</strong>{' '}
          {comment.text}
        </p>
      </li>
    );
  }
}

export default CSSModules(CommentItem, styles);
