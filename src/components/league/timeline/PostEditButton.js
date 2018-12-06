import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostEditButton extends Component {
  static propTypes = {
    onHandlePostEditClick: PropTypes.func.isRequired
  };

  render() {
    const { onHandlePostEditClick } = this.props;

    return <div onClick={onHandlePostEditClick}>Edit</div>;
  }
}

export default PostEditButton;
