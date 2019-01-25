import * as React from 'react';

import styles from './Card.module.scss';

interface Props {
  children: any;
  variant: 'light' | 'dark';
}

const Card: React.StatelessComponent<Props> = ({ variant, children }) => {
  return <div className={styles[`card-${variant}`]}>{children}</div>;
};

Card.defaultProps = {
  children: null,
  variant: 'light'
};

export default Card;
