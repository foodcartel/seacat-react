var React = require('react');
var NavigationBar = require('./NavigationBar');
var ChatPane = require('./ChatPane');
var UserList = require('./UserList');
var InputBar = require('./InputBar');

var AppComponent = React.createClass({
	getInitalState() {
		console.log(this.state);
	 return {users: [], messages: []};
	},

	_initalize() {

	},

	componentDidMount() {
		console.log('componentDidMount');
	},

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
