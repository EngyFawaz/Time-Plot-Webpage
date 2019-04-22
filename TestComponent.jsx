// Test component
// Check if ES6 with React and Webpack works.
import React from 'react';
import Graph from './components/graph';

export default class ReactTestComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }


  componentDidMount(){
    var dataArr = [];
    var x = 0.1;
    
    const socket = new WebSocket("ws://localhost:4000/websocket");
    
    let self = this;

    socket.addEventListener('message', function(msg) {

      var addedElem = [];
      // Parse the data to obtain the actual number
      var data = JSON.parse(msg.data)["data"]

      addedElem.push(x);
      addedElem.push(data);
      //console.log("addedElem "+addedElem);

      x += 0.1;
      //console.log("x "+x);

      dataArr.push(addedElem);
      self.setState({list : dataArr})
      //console.log("dataArr " + dataArr);



    });
    

    
  }

  render() {
    return (<Graph data={this.state.list} />);
  }

}
