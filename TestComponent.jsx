// Test component
// Check if ES6 with React and Webpack works.
import React from 'react';
import Graph from './components/graph';

export default class ReactTestComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [[]],
      currentIndex: 0
    };
  }


  componentDidMount(){
    var dataArr = [[]];
    var x = 0.1;
    var diff = 0.1;
    var index = 0;

    const socket = new WebSocket("ws://localhost:4000/websocket");
    
    let self = this;

    socket.addEventListener('message', function(msg) {

      var addedElem = [];
      // Parse the data to obtain the actual number
      var data = JSON.parse(msg.data)["data"]

      
      addedElem.push(x);
      addedElem.push(data);
      //console.log("addedElem "+addedElem);

      x += diff;
      //console.log("x "+x);
      
     
      dataArr[index].push(addedElem);

      // if(x >= 5){
      //   diff /= 2;
      //   x = diff;
      //   console.log(dataArr);
      //   for(var i = 0 ; i< dataArr.length ; i ++){
      //     dataArr[i][0] = x;
      //   }
      //   console.log(dataArr);
      // }

      if(x >= 19){
        x = diff;
        index++;
        dataArr.push([]);
        self.setState({currentIndex : index , list : dataArr})
        console.log("index " + index)
        
      }
      else{
        self.setState({list : dataArr})
      }



    });
  }

  render() {
    console.log(this.state.list[this.state.currentIndex]);
    return (<Graph data={this.state.list[this.state.currentIndex]} />);
  }

}
