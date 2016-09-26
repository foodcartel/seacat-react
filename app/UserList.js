import React from 'react';
import Socket from 'socket.io-client';

class UserList extends React.Component {
	constructor() {
		super();
		this.state = {
			users: {},
		};
	}

	componentDidMount() {
		this.socket = Socket.connect('http://127.0.0.1:3000');
		// this.socket.on('message-sent', this.handleMessageRecieved);
	}

	render() {
		return (
			<div id="UserList">
			</div>
		);
	}
}

module.exports = UserList;
