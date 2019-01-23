import React, { Component } from 'react';
import styles from './Accordion.module.scss';

import AccordionSection from './AccordionSection';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        this.setState({
          openSections: {
            [child.props.label]: true
          }
        })
      }
    });
  }

  state = {
    openSections: {}
  };

  handleClick = label => {
    const { openSections } = this.state;
    const { allowMultipleOpen } = this.props;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  }

  render() {
    return (
      <div className={styles['accordion']}>
        {
          this.props.children.map((child, i) => (
            <AccordionSection
              key={i}
              isOpen={!child.props.isDisabled && !!this.state.openSections[child.props.label]}
              label={child.props.label}
              onHandleClick={!child.props.isDisabled ? this.handleClick : () => {}}
              isDisabled={child.props.isDisabled}
            >
              {child.props.children}
            </AccordionSection>
          ))
        }
      </div>
    )
  }
}

export default Accordion;