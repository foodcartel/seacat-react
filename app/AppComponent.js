var React = require('react');
var NavigationBar = require('./NavigationBar');
var InputBar = require('./InputBar');
var AppComponent = React.createClass({
	render: function() {
		return (
		<div id="appComponent">
			<NavigationBar/>
			<InputBar/>
		</div>
		);
	}
});

module.exports = AppComponent;
