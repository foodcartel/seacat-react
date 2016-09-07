var React = require('react');
var NavigationBar = require('./NavigationBar');
var ChatPane = require('./ChatPane');
var UserList = require('./UserList');
var InputBar = require('./InputBar');

var AppComponent = React.createClass({
	render: function() {
		return (
		<div id="appComponent">
			<div className="chatContainer">
				<UserList/>
				<ChatPane/>
			</div>
			<InputBar/>
		</div>
		);
	}
});

module.exports = AppComponent;
