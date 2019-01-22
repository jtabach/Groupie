import React, { Component } from 'react';
import styles from './Accordion.module.scss';

import AccordionSection from './AccordionSection';

class Accordion extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    openSections: {}
  };

  handleClick = label => {
    const { openSections } = this.state;

    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  }

  render() {
    return (
      <div className={styles['accordion']}>
        {
          this.props.children.map(child => (
            <AccordionSection
              isOpen={!!this.state.openSections[child.props.label]}
              label={child.props.label}
              onHandleClick={this.handleClick}
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