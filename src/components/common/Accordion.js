import React, { Component } from 'react';
import styles from './Accordion.module.scss';
import PropTypes from 'prop-types';

import AccordionSection from './AccordionSection';

class Accordion extends Component {
  static propTypes = {
    // children: function (props, propName, componentName) {
    //   const prop = props[propName]
    //
    //   let error = null
    //   React.Children.forEach(prop, function (child) {
    //     if (child.type !== AccordionSection) {
    //       error = new Error('`' + componentName + '` children should be of type `AccordionSection`.');
    //     }
    //   })
    //   return error
    // }
  };

  constructor(props) {
    super(props);

    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        this.state.openSections[child.props.label] = true;
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