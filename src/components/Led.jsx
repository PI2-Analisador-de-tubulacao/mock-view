import React, { Component } from 'react';
import ROSLIB from 'roslib';

class Led extends Component {
  constructor(props) {
    super(props);
    this.ros = new ROSLIB.Ros({
      encoding: 'ascii',
      url: 'ws://0.0.0.0:9090',
    });

    this.state = {
      brightnessValue: 0,
      ledCommandTopic: new ROSLIB.Topic({
        ros: this.ros,
        name: '/commands/leds',
        messageType: 'std_msgs/Float32',
      }),
    };
  }

  componentDidMount() {
    const { ledCommandTopic } = this.state;
    ledCommandTopic.subscribe((message) => {
      this.setState({ brightnessValue: message.data });
    });
  }

  render() {
    const { brightnessValue } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '25%', height: '150px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexBasis: '10%' }}>
          <h1>LED</h1>
        </div>
        <div style={{ display: 'flex', flexBasis: '90%', alignItems: 'center', justifyContent: 'center' }}>
          <span>Intensidade: <span style={{ color: 'blue' }}>{brightnessValue} %</span></span>
        </div>
      </div>
    );
  }
}

export default Led;
