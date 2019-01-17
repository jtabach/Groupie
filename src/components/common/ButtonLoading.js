import React from 'react';
import styles from './ButtonLoading.module.scss';

import loadingImage from '../../images/loading.gif';

const ButtonLoading = () => {
  return (
    <img className={styles["loading"]} src={loadingImage} alt="" />
  );
}

export default ButtonLoading;