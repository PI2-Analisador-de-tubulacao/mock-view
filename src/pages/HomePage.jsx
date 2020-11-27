import React, { Component } from 'react';
import ROSLIB from 'roslib';
import Led from '../components/Led';

class HomePage extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Led />
      </div>
    );
  }
}

export default HomePage;
