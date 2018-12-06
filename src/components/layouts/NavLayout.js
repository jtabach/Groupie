import React, { Component } from 'react';

import Header from '../shared/header/Header';
import SideDrawer from '../shared/header/SideDrawer';
import BackDrop from '../shared/header/BackDrop';

class NavLayout extends Component {
  state = {
    isSideDrawerOpen: false
  };

  handleDrawerToggleClick = () => {
    this.setState(prevState => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  handleBackDropClick = () => {
    this.setState({ isSideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.isSideDrawerOpen) {
      backDrop = <BackDrop handleBackdropClick={this.handleBackDropClick} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Header handleDrawerToggleClick={this.handleDrawerToggleClick} />
        <SideDrawer isVisible={this.state.isSideDrawerOpen} />
        {backDrop}
        <div style={{ marginTop: '48px' }}>{this.props.children}</div>
      </div>
    );
  }
}

export default NavLayout;
