var React = require('react');
var NavigationBar = require('./NavigationBar');
var ChatPane = require('./ChatPane');
var ChatMessage = require('./ChatMessage');
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
		});
	},

	handleInputChanged(event) {
		this.props.messages = event;
		this.socket.emit('typing', {data: event});
	},

	handlePress() {
		console.log(this.props.message);
	},

	render: function() {
		return (
		<div id="appComponent">
			<NavigationBar/>
			<div className="chatContainer">
				<UserList/>
				<ChatPane/>
			</div>
			<InputBar onPress={this.handlePress} onTyping={this.handleInputChanged}/>
		</div>
		);
	}
});

module.exports = AppComponent;
