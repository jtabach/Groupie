import * as React from 'react';

import styles from './Card.module.scss';

interface Props {
  children: any;
  variant: 'light' | 'dark';
}

class Card extends React.Component<Props> {
  public static defaultProps = {
    children: null,
    variant: 'light'
  };

  public render() {
    const { variant } = this.props;

    return (
      <div className={styles[`card-${variant}`]}>{this.props.children}</div>
    );
  }
}

export default Card;
