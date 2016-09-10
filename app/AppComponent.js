var React = require('react');
var NavigationBar = require('./NavigationBar');
var ChatPane = require('./ChatPane');
var ChatMessage = require('./ChatMessage');
var UserList = require('./UserList');
var InputBar = require('./InputBar');
var Socket = require('socket.io-client');

var AppComponent = React.createClass({
	getInitalState() {
		return {users: [], message: '', typing: false};
	},

	componentDidMount() {
		this.socket = Socket.connect('http://127.0.0.1:3000');
		this.socket.on('message-sent', function(socket) {
			console.log('message sent: ', socket.data);
		});
	},

	handleInputChanged(event) {
		this.setState({ message: event });
		this.socket.emit('typing', {data: event});
	},

	handleMessageSubmit(event) {
		console.log('handleMessageSubmit', this.state.message);
		this.socket.emit('message-submit', {data: this.state.message});
	},

	render: function() {
		return (
		<div id="appComponent">
			<NavigationBar/>
			<div className="chatContainer">
				<UserList/>
				<ChatPane/>
			</div>
			<InputBar onMessageSubmit={this.handleMessageSubmit} onTyping={this.handleInputChanged}/>
		</div>
		);
	}
});

module.exports = AppComponent;
