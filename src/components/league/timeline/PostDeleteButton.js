import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostDeleteButton extends Component {
  static propTypes = {
    onHandlePostDelete: PropTypes.func.isRequired
  };

  render() {
    const { onHandlePostDelete } = this.props;

    return <div onClick={onHandlePostDelete}>Delete</div>;
  }
}

export default PostDeleteButton;
