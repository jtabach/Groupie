import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchWorkerDemo } from '../../actions/demoActions';

const intervalFrequency = 30000;

class DemoWorker extends Component {
  componentDidMount() {
    // this.props.fetchWorkerDemo();
    // setInterval(() => {
    //   this.props.fetchWorkerDemo();
    //   console.log('fetching');
    // }, intervalFrequency);
  }

  render() {
    console.log(this.props.demo);
    return (
      <div>
        <div>Service Worker Test</div>
      </div>
    );
  }
}

function mapStateToProps({ demo }) {
  return {
    demo
  };
}

export default connect(mapStateToProps, { fetchWorkerDemo })(DemoWorker);
