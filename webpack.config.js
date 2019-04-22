var webpack = require('webpack');

var config = {
  mode: 'development',
  entry: "./index.jsx",
  module: { rules : [ { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", options: {presets: ["@babel/react"]} } ] },
  plugins: [ new webpack.ProvidePlugin({ "React": "react", "ReactDOM": "react-dom" }) ]
}
module.exports = config;

