import React, { Component } from 'react';
import Modal from '../../common/Modal';

import UIHelper from '../../../helpers/uiHelper';

class NewsModal extends Component {
  _replaceHTMLCharRef(str) {
    return str.replace(/&apos;/g, '\'');
  }

  render() {
    const { isOpen, onHandleClose, content } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onHandleClose}
      >
        {
          content.headline
          ?
          <div>
            <p>{content.firstName} {content.lastName}</p>
            <p>{content.teamAbbr}</p>
            <p>{content.position}</p>
            <p>{UIHelper.replaceHTMLCharRef(content.headline)}</p>
            <p>{UIHelper.replaceHTMLCharRef(content.body)}</p>
            <p>{UIHelper.replaceHTMLCharRef(content.analysis)}</p>
          </div>
          : null
        }
      </Modal>
    );
  }
}

export default NewsModal;