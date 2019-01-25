import React, { Component } from 'react';
import styles from './NewsModal.module.scss';

import Modal from '../../common/Modal';

import UIHelper from '../../../helpers/uiHelper';

class NewsModal extends Component {
  _replaceHTMLCharRef(str) {
    return str.replace(/&apos;/g, "'");
  }

  render() {
    const { isOpen, onHandleClose, content } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={onHandleClose}>
        {content.headline ? (
          <div className={styles['news-modal']}>
            <h4 className={styles['news-modal__name']}>
              {content.firstName} {content.lastName}
            </h4>
            <h6 className={styles['news-modal__position']}>
              {content.teamAbbr} - {content.position}
            </h6>
            <h5 className={styles['news-modal__headline']}>
              {UIHelper.replaceHTMLCharRef(content.headline)}
            </h5>
            <p className={styles['news-modal__body']}>
              {UIHelper.replaceHTMLCharRef(content.body)}
            </p>
            <p className={styles['news-modal__analysis']}>
              {UIHelper.replaceHTMLCharRef(content.analysis)}
            </p>
          </div>
        ) : null}
      </Modal>
    );
  }
}

export default NewsModal;
