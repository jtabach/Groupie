import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import Textarea from 'react-textarea-autosize';

import Button from '../../common/Button';

Modal.setAppElement('#root'); // for screen readers

class PostEditModal extends Component {
  static propTypes = {
    post: CustomPropTypes.post.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onHandleClose: PropTypes.func.isRequired,
    onPostEditInputChange: PropTypes.func.isRequired,
    onPostEditInputSubmit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  };

  static defaultProps = {
    isOpen: false
  };

  render() {
    const {
      isOpen,
      onHandleClose,
      onPostEditInputChange,
      onPostEditInputSubmit,
      text
    } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={onHandleClose}>
        <Textarea
          inputRef={tag => (this.textarea = tag)}
          type="text"
          placeholder="Say Something!"
          value={text}
          onChange={() => onPostEditInputChange(this.textarea.value)}
        />
        <Button
          type="button"
          variant="primary"
          size="small"
          label="post"
          onClick={() => onPostEditInputSubmit(this.textarea.value)}
        />
        <Button
          type="button"
          variant="red"
          size="small"
          label="cancel"
          onClick={onHandleClose}
        />
      </Modal>
    );
  }
}

export default PostEditModal;
