var React = require('react');
var NavigationBar = require('./NavigationBar');
var ChatPane = require('./ChatPane');
var UserList = require('./UserList');
var InputBar = require('./InputBar');
var Socket = require('socket.io-client');

var AppComponent = React.createClass({
	getInitalState() {
		return {users: [], messages: [], typing: false};
	},

	componentDidMount() {
		this.socket = Socket.connect('http://127.0.0.1:3000');
		this.socket.on('client-typing', function(event){
			console.log('typing is being recieved', event.data);
		});
	},

	handleInputChanged(event) {
		console.log("handleInputChanged: ",event);
		this.socket.emit('typing', {data: event});
	},

	render: function() {
		return (
		<div id="appComponent">
			<div className="chatContainer">
				<UserList/>
				<ChatPane/>
			</div>
			<InputBar onTyping={this.handleInputChanged}/>
		</div>
		);
	}
});

module.exports = AppComponent;
