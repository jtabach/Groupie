import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PostField.module.scss';

import Textarea from 'react-textarea-autosize';
import ButtonTest from '../../common/ButtonTest';

class PostField extends Component {
  static propTypes = {
    onPostInputChange: PropTypes.func.isRequired,
    onPostInputSubmit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const { onPostInputChange, onPostInputSubmit } = this.props;

    return (
      <div className={styles['post-field']}>
        <Textarea
          inputRef={tag => (this.textarea = tag)}
          type="text"
          placeholder="Say Something!"
          value={this.props.text}
          onChange={() => onPostInputChange(this.textarea.value)}
        />
        <ButtonTest
          type="button"
          variant="primary"
          size="small"
          label="post"
          onClick={() => onPostInputSubmit(this.textarea.value)}
        />
      </div>
    );
  }
}

export default PostField;
