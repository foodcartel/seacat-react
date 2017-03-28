const React = require('react');
const ReactDom = require('react-dom');
const AppComponent = require('./AppComponent.jsx');

require('./styles/main.css');

ReactDom.render(<AppComponent />, document.getElementById('SeacatApp'));
