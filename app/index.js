var React = require('react');
var ReactDom = require('react-dom');
var AppComponent = require('./AppComponent');
require('./styles/main.css');

ReactDom.render(<AppComponent/>, document.getElementById('SeacatApp'));
