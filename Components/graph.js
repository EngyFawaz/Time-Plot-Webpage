import React from 'react';
import Axis from './axis';
import GraphBody from './GraphBody';

export default class Graph extends React.Component {
  static defaultProps = { width: 400, height: 300 };

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axis
          x={20}
          y={this.props.height - 100}
          length={this.props.width}
          horizontal={true}
        />
        <Axis
          x={20}
          y={0}
          length={this.props.height - 100}
          horizontal={false}
        />
        <Axis
          x={20}
          y={200}
          length={this.props.height - 100}
          horizontal={false}
        />
        <GraphBody
          x={20}
          y={this.props.height - 100}
          data={this.props.data}
        />
      </svg>
    )
  }
}