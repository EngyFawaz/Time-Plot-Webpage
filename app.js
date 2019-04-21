// Create router and publish the start file
const express		= require('express');
const expressWs		= require('express-ws');

var ws = expressWs(express());
var app = ws.app;

// Configure webpack to provide React components
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackMiddleware = require('webpack-dev-middleware');
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));

// Define the available routes
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get('/index.js', function(req, res) {
  res.sendFile(__dirname + "/index.js");
});

// Listen for Websocket connections
app.ws('/websocket', function(ws, res) {
  ws.on('open', () => {
    console.log('Websocket was opened');
  })
  ws.on('close', () => {
    console.log('WebSocket was closed');
  })
});

// Obtain the available websocket connection and send each second new data
const aWss = ws.getWss('/websocket');
var value = 0;
setInterval(function () {
  value += Math.random()-0.5;
  aWss.clients.forEach(function (client) {
    client.send('{ "data": '+value.toString()+" }");
  });
}, 1000);

// Run the Mainloop of the server
app.listen(4000);
