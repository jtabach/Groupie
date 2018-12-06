import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';

import PostItem from './PostItem';

class PostList extends Component {
  static propTypes = {
    league: CustomPropTypes.league.isRequired
  };

  renderPosts() {
    const { posts } = this.props.league;

    return [...posts].reverse().map(post => {
      return <PostItem key={post._id} post={post} />;
    });
  }

  render() {
    return (
      <div>
        <h6>Recent Activity</h6>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

export default PostList;
