import React from 'react';
import styles from './Loading.module.scss';

import loadingImage from '../../images/loading.gif';

const Loading = () => {
  return (
    <div className={styles['loading']}>
      <img src={loadingImage} alt="" />
    </div>
  );
};

export default Loading;
