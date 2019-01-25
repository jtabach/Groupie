import React, { Component } from 'react';
import styles from './PostEditModal.module.scss';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import Textarea from 'react-textarea-autosize';

import Modal from '../../common/Modal';
import ButtonTest from '../../common/ButtonTest';

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
        <div className={styles['edit-modal']}>
          <div className={styles['edit-modal__textarea']}>
            <Textarea
              inputRef={tag => (this.textarea = tag)}
              type="text"
              placeholder="Say Something!"
              value={text}
              onChange={() => onPostEditInputChange(this.textarea.value)}
            />
          </div>
          <div className={styles['edit-modal__button-wrapper']}>
            <ButtonTest
              type="button"
              variant="primary"
              size="small"
              label="save"
              onClick={() => onPostEditInputSubmit(this.textarea.value)}
            />
            <ButtonTest
              type="button"
              variant="red"
              size="small"
              label="cancel"
              onClick={onHandleClose}
            />
          </div>
        </div>
      </Modal>
    );
  }
}

export default PostEditModal;
