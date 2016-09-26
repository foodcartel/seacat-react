import React from 'react';
import NavigationBar from './NavigationBar';
import ChatWindow from './ChatWindow';


class AppComponent extends React.Component {

  constructor() {
		super();
		this.state = {
      // users: {},
      // message: '',
      // messages: ['hello friend...'],
      // typing: false
		};
	}

	componentDidMount() {
		// this.socket = Socket.connect('http://127.0.0.1:3000');
		// this.socket.on('message-sent', this.handleMessageRecieved);
	}
	/* handleInputChanged = (event) => {
		this.setState({ message: event });
		this.socket.emit('typing', {data: event});
		this.setState({typing: true});
	}
	handleMessageSubmit = (event) => {
		console.log('handleMessageSubmit', this.state.message);
		this.socket.emit('message-submit', {data: this.state.message});
	}
	handleMessageRecieved = (event) => {
		console.log("handleMessageRecieved: ", event.data);
		this.setState({messages: this.state.messages.concat([event.data])});
		console.log("Messages: ", this.state.messages);
	}*/

	render() {
		return (
		<div id="appComponent">
			<NavigationBar/>
		  <ChatWindow/>
		</div>
		);
	}
}

module.exports = AppComponent;
