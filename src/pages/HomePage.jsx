import React, { Component } from 'react';
import ROSLIB from 'roslib';
import GeneralData from '../components/GeneralData';
import Prediction from '../components/Prediction';

class HomePage extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <GeneralData topicName="/commands/leds" name="LED" type="std_msgs/Float32" render="number"/>
          <GeneralData topicName="/commands/camera/height" name="ALTURA DA CÂMERA" type="std_msgs/Int8" render="number"/>
        </div>
        <div style={{ display: 'flex' }}>
          <GeneralData topicName="/commands/camera/rotation" name="ROTAÇÃO DA CÂMERA" type="geometry_msgs/Vector3" render="object"/>
          <GeneralData topicName="/commands/move" name="MOVIMENTO DA PLATAFORMA" type="geometry_msgs/Vector3" render="object"/>
        </div>
        <Prediction />
      </div>
    );
  }
}

export default HomePage;
