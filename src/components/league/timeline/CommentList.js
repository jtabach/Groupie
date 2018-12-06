import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import styles from './CommentList.scss';

import CommentItem from './CommentItem';

class CommentList extends Component {
  static propTypes = {
    post: CustomPropTypes.post.isRequired
  };

  renderComments() {
    const { comments } = this.props.post;

    return comments.map(comment => {
      return <CommentItem key={comment._id} comment={comment} />;
    });
  }

  render() {
    return <ul styleName="comment-list">{this.renderComments()}</ul>;
  }
}

export default CSSModules(CommentList, styles);
