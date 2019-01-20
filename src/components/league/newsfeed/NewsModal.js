import React, { Component } from 'react';
import Modal from 'react-modal';

class NewsModal extends Component {
  render() {
    const { isOpen, onHandleClose, content } = this.props;
    console.log(content);
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onHandleClose}
      >
        <div>This is a modal</div>
      </Modal>
    );
  }
}

export default NewsModal;