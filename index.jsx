// index.js javascript
// Starts the websocket, listen for data and insert it on the page

// Connect to the WebSocket and listen for a message callback, i.e.
// wait until the server sends a message
// const socket = new WebSocket("ws://10.8.0.10:4000/websocket");
const socket = new WebSocket("ws://localhost:4000/websocket");
socket.addEventListener('message', function(msg) {
  var elem = document.getElementById('log');  // find div node
  elem.insertBefore(document.createElement("br"), elem.childNodes[0]); // insert the line break

  // Parse the data to obtain the actual number
  var data = JSON.parse(msg.data)["data"]
  // add the node with the recived data
  elem.insertBefore(document.createTextNode("Recived data: "+data.toString()), elem.childNodes[0]);
});

import TestComponent from './TestComponent.jsx';
import data from './data';

document.addEventListener("DOMContentLoaded", function(event) {
  // Mount a React test component to see if it works
  ReactDOM.render(<TestComponent data= {data}/>, document.getElementById('timeplot'))
});
