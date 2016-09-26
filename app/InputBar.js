import React from 'react';
import Socket from 'socket.io-client';
import InputButton from './InputButton';

class InputBar extends React.Component {
	constructor() {
		super();
		this.state = {
			typing: false
		};
	}

	componentDidMount() {
	  this.socket = Socket.connect('http://127.0.0.1:3000');
  }

	inputChanged = (event) => {
		this.setState({ typing: true});
	}

	inputClicked = (event) => {
	  this.socket.emit('message-submit', {data: this.refs.messageInput.value});
		this.refs.messageInput.value = '';
	}

	keyPressed = (event) => {
		if (event.keyCode === 13) {
			event.preventDefault();
			this.inputClicked();
		}
	}

	inputFocus = (event) => {
	 console.log(event);
	}

	render() {
		return (
			<div id="InputBar">
	      <form id="MessageForm">
					<span>
						<label className="input-inner-label" htmlFor="message">Message: </label>
						<input type="text" ref="messageInput" name="message" autoComplete="off"
                   onFocus={this.inputFocus}
                   onChange={this.inputChanged}
                   onKeyDown={this.keyPressed}
            />
						<InputButton onPressed={this.inputClicked} />
					</span>
				</form>
			</div>
		);
	}
}

module.exports = InputBar;
