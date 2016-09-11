var React = require('react');
var NavigationBar = require('./NavigationBar');
var ChatPane = require('./ChatPane');
var ChatMessage = require('./ChatMessage');
var UserList = require('./UserList');
var InputBar = require('./InputBar');
var Socket = require('socket.io-client');

class AppComponent extends React.Component {
	constructor(props) {
		super();
		this.handleInputChanged = this.handleInputChanged.bind(this);
		this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
		this.handleMessageRecieved = this.handleMessageRecieved.bind(this);
		this.state = { users: {}, message: '', messages: ['hello friend.'], typing: false };
	}
	componentDidMount() {
		this.socket = Socket.connect('http://127.0.0.1:3000');
		this.socket.on('message-sent', this.handleMessageRecieved);
	}
	handleInputChanged(event) {
		this.setState({ message: event });
		this.socket.emit('typing', {data: event});
		this.setState({typing: true});
	}
	handleMessageSubmit(event) {
		console.log('handleMessageSubmit', this.state.message);
		this.socket.emit('message-submit', {data: this.state.message});
	}
	handleMessageRecieved(event) {
		console.log("handleMessageRecieved: ", event.data);
		this.setState({messages: this.state.messages.concat([event.data])});
		console.log("Messages: ", this.state.messages);
	}
	render() {
		return (
		<div id="appComponent">
			<NavigationBar/>
			<div className="chatContainer">
				<UserList/>
				<ChatPane typing={this.state.typing} messages={this.state.messages} />
			</div>
			<InputBar onMessageSubmit={this.handleMessageSubmit} onTyping={this.handleInputChanged} />
		</div>
		);
	}
}

module.exports = AppComponent;
