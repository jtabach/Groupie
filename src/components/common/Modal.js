import React, { Component } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 26, 54, 0.9)'
  },
  content: {
    top: '50%',
    left: '50%',
    maxWidth: '70%',
    marginRight: '-50%',
    maxHeight: '80%',
    height: 'auto',
    transform: 'translate(-50%, -50%)'
  }
};

class Modal extends Component {
  render() {
    const { isOpen, onRequestClose } = this.props;

    return (
      <ReactModal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        {this.props.children}
      </ReactModal>
    );
  }
}

export default Modal;
