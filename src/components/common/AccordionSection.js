import React, { Component } from 'react';
import styles from './AccordionSection.module.scss';

class AccordionSection extends Component {
  handleClick = () => {
    this.props.onHandleClick(this.props.label);
  }

  render() {
    const { label, isOpen, isDisabled } = this.props;

    const accordionHeaderStyleName = isDisabled ? 'accordion-header-disabled' : 'accordion-header';

    return (
      <div className={styles['accordion-section']}>
        <div className={styles[accordionHeaderStyleName]} onClick={this.handleClick}>
          <div className={styles['accordion-label']}>{label}</div>
          <div
            className={styles['accordion-icon']}
          >
            {
              isDisabled
              ? <span>&#120;</span>
              : isOpen
              ? <span>&#9660;</span>
              : <span>&#9650;</span>
            }
          </div>
        </div>
        {
          isOpen && (
            <div className={styles['accordion-body']}>
              {this.props.children}
            </div>
          )
        }
      </div>
    );
  }
}

export default AccordionSection;