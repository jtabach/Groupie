import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Newsfeed.module.scss';

import NewsCard from './NewsCard';
import NewsModal from './NewsModal';
import Modal from '../../common/Modal';

class Newsfeed extends Component {
  constructor(props) {
    super(props);

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  state = {
    isModalOpen: false,
    newsContent: {}
  };

  handleModalOpen(item) {
    this.setState({
      isModalOpen: true,
      newsContent: item
    });
  }

  handleModalClose() {
    this.setState({
      isModalOpen: false,
      newsContent: {}
    });
  }

  renderPlayerNews() {
    const { news } = this.props;
    if (!news.length) {
      return null;
    }
    return news.map(item => {
      return (
        <NewsCard
          key={item.id}
          content={item}
          onHandleClick={this.handleModalOpen}
        />
      );
    });
  }

  render() {
    return (
      <div className={styles['newsfeed']}>
        <h5 className={styles['newsfeed__header']}>Player News</h5>
        <ul>{this.renderPlayerNews()}</ul>
        <NewsModal
          isOpen={this.state.isModalOpen}
          onHandleClose={this.handleModalClose}
          content={this.state.newsContent}
        />
      </div>
    );
  }
}

function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps)(Newsfeed);
