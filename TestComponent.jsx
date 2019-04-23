// Test component
// Check if ES6 with React and Webpack works.
import React from 'react';
import Graph from './components/graph';

export default class ReactTestComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [[]],
      currentIndex: 0,
      selectedIndex: 0
    };
  }

  selectGraph(event) {
    this.setState({selectedIndex: event.target.value});
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

      if(x >= 19){
        x = diff;
        index++;
        dataArr.push([]);
        self.setState({currentIndex : index , list : dataArr , selectedIndex: index})
        console.log("index " + index)
        
      }
      else{
        self.setState({list : dataArr})
      }



    });
  }

  render() {
    let options = this.state.list.map((_, index) => {
      return <option key={index} value={index}>Graph {index + 1}</option>
    });

    console.log(this.state.list[this.state.currentIndex]);
    return (<div> 
      
      <select
          value={this.state.selectedIndex}
          onChange={this.selectGraph.bind(this)} >
          {options}
        </select>
        
      <Graph data={this.state.list[this.state.selectedIndex]} /> </div>);
  }

}
