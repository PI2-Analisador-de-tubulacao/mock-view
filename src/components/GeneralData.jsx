import React, { Component } from 'react';
import ROSLIB from 'roslib';

class GeneralData extends Component {
  constructor(props) {
    super(props);
    this.ros = new ROSLIB.Ros({
      encoding: 'ascii',
      url: 'ws://0.0.0.0:9090',
    });

    this.state = {
      value: 0,
      topic: new ROSLIB.Topic({
        ros: this.ros,
        name: props.topicName,
        messageType: props.type,
      }),
    };
  }

  componentDidMount() {
    const { topic } = this.state;
    topic.subscribe((message) => {
      this.setState({ value: message.data || message.data === 0 ? message.data : message });
    });
  }

  renderText = (value) => {
    const { render } = this.props;
    if(render === 'number') {
      return(
        <span>Valor: <span style={{ color: 'blue' }}>{value} %</span></span>
      );
    } else if(render === 'object') {
      return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>x: <span style={{ color: 'blue' }}>{value.x}</span></span>
          <span>y: <span style={{ color: 'blue' }}>{value.y}</span></span>
          <span>z: <span style={{ color: 'blue' }}>{value.z}</span></span>
        </div>
      );
    }
  }

  render() {
    const { name } = this.props;
    const { value } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', height: '150px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexBasis: '10%' }}>
          <h1 style={{ textAlign: 'center' }}>{ name }</h1>
        </div>
        <div style={{ display: 'flex', flexBasis: '90%', alignItems: 'center', justifyContent: 'center' }}>
          {this.renderText(value)}
        </div>
      </div>
    );
  }
}

export default GeneralData;
