import React from 'react';
import Socket from 'socket.io-client';
import ChatMessage from './ChatMessage';

class ChatPane extends React.Component {
	constructor() {
		super();
		this.state = {
			messages: ['hello friend...'],
		};
	}

	componentDidMount() {
		this.socket = Socket.connect('http://127.0.0.1:3000');
		this.socket.on('message-sent', this.handleMessageRecieved);
	}
	handleMessageRecieved = (socket) => {
		this.setState({messages: this.state.messages.concat([socket.data])});
	}

	render() {
		return (
			<div id="ChatPane">
				{this.state.messages.map((message, index) => (
					<ChatMessage key={index} message={message}></ChatMessage>
				))}
			</div>
		);
	}
}

module.exports = ChatPane;
