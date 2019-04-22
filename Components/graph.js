import React from 'react';
import Axis from './axis';
import GraphBody from './GraphBody';

export default class Graph extends React.Component {
  //static defaultProps = { width: 800, height: 600 };

  render() {
    return (
      <svg width={800} height={600}>
        <Axis
          x={20}
          y={500}
          length={800}
          horizontal={true}
        />
        <Axis
          x={20}
          y={0}
          length={500}
          horizontal={false}
        />
        <GraphBody
          x={20}
          y={500}
          data={this.props.data}
        />
      </svg>
    )
  }
}