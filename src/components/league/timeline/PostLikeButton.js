import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';

class PostLikeButton extends Component {
  static propTypes = {
    isLiked: PropTypes.bool.isRequired,
    onHandleLikeToggle: PropTypes.func.isRequired
  };

  // TODO: this is a mess (consider seperate component for unliking)
  render() {
    const { isLiked, onHandleLikeToggle } = this.props;

    const likeStr = !isLiked ? 'like' : 'unlike';

    return (
      <Button
        type="button"
        variant={!isLiked ? 'primary' : 'secondary'}
        size="small"
        onClick={() => onHandleLikeToggle(likeStr)}
        label={likeStr}
      />
    );
  }
}

export default PostLikeButton;
