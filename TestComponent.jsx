// Test component
// Check if ES6 with React and Webpack works.
import React from 'react';
import Graph from './components/graph';

export default class ReactTestComponent extends React.Component {

  render() {
    return ( <Graph data={this.props.data} />);
  }

}
