import React, { Component } from 'react';
import ROSLIB from 'roslib';
import Led from '../components/Led';
import Prediction from '../components/Prediction';

class HomePage extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Led />
        <Prediction />
      </div>
    );
  }
}

export default HomePage;
